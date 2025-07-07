import React, { useState } from 'react'
import { X, Plus, Edit, Trash2, Save, Eye, EyeOff } from 'lucide-react'
import { Story, Category } from '../types'

interface CMSProps {
  stories: Story[]
  categories: Category[]
  onAddStory: (story: Omit<Story, 'id'>) => void
  onUpdateStory: (story: Story) => void
  onDeleteStory: (storyId: string) => void
  onClose: () => void
}

const CMS: React.FC<CMSProps> = ({ 
  stories, 
  categories, 
  onAddStory, 
  onUpdateStory, 
  onDeleteStory, 
  onClose 
}) => {
  const [activeTab, setActiveTab] = useState<'list' | 'add' | 'edit'>('list')
  const [editingStory, setEditingStory] = useState<Story | null>(null)
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    author: '',
    category: 'environment',
    tags: '',
    imageUrl: '',
    featured: false
  })

  const resetForm = () => {
    setFormData({
      title: '',
      excerpt: '',
      content: '',
      author: '',
      category: 'environment',
      tags: '',
      imageUrl: '',
      featured: false
    })
    setEditingStory(null)
  }

  const handleEdit = (story: Story) => {
    setEditingStory(story)
    setFormData({
      title: story.title,
      excerpt: story.excerpt,
      content: story.content,
      author: story.author,
      category: story.category,
      tags: story.tags.join(', '),
      imageUrl: story.imageUrl,
      featured: story.featured
    })
    setActiveTab('edit')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const storyData = {
      title: formData.title,
      excerpt: formData.excerpt,
      content: formData.content,
      author: formData.author,
      category: formData.category,
      tags: formData.tags.split(',').map(tag => tag.trim()).filter(Boolean),
      imageUrl: formData.imageUrl,
      featured: formData.featured,
      publishedAt: new Date().toISOString().split('T')[0]
    }

    if (editingStory) {
      onUpdateStory({ ...storyData, id: editingStory.id })
    } else {
      onAddStory(storyData)
    }

    resetForm()
    setActiveTab('list')
  }

  const handleDelete = (storyId: string) => {
    if (window.confirm('Are you sure you want to delete this story?')) {
      onDeleteStory(storyId)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <h1 className="text-3xl font-black text-black">CONTENT MANAGEMENT SYSTEM</h1>
            <button
              onClick={onClose}
              className="bg-red-500 text-white p-3 border-4 border-black font-black hover:bg-red-600 transition-all"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-yellow-400 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-4 py-4">
            <button
              onClick={() => setActiveTab('list')}
              className={`px-6 py-3 border-4 border-black font-black transition-all ${
                activeTab === 'list' 
                  ? 'bg-black text-white' 
                  : 'bg-white text-black hover:bg-gray-100'
              }`}
            >
              ALL STORIES ({stories.length})
            </button>
            <button
              onClick={() => {
                setActiveTab('add')
                resetForm()
              }}
              className={`px-6 py-3 border-4 border-black font-black transition-all flex items-center space-x-2 ${
                activeTab === 'add' 
                  ? 'bg-black text-white' 
                  : 'bg-white text-black hover:bg-gray-100'
              }`}
            >
              <Plus className="h-5 w-5" />
              <span>ADD NEW STORY</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stories List */}
        {activeTab === 'list' && (
          <div className="space-y-6">
            {stories.length === 0 ? (
              <div className="bg-white border-4 border-black p-12 text-center">
                <h3 className="text-2xl font-black text-black mb-4">NO STORIES YET</h3>
                <p className="text-lg font-bold text-gray-700 mb-6">
                  Start by adding your first story to the platform.
                </p>
                <button
                  onClick={() => setActiveTab('add')}
                  className="bg-yellow-400 text-black px-6 py-3 border-4 border-black font-black hover:bg-yellow-500 transition-all"
                >
                  ADD FIRST STORY
                </button>
              </div>
            ) : (
              stories.map((story) => (
                <div key={story.id} className="bg-white border-4 border-black p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-3">
                        <h3 className="text-xl font-black text-black">{story.title}</h3>
                        {story.featured && (
                          <span className="bg-yellow-400 text-black px-2 py-1 border-2 border-black font-black text-xs">
                            FEATURED
                          </span>
                        )}
                      </div>
                      <p className="text-gray-700 font-bold mb-3">{story.excerpt}</p>
                      <div className="flex items-center space-x-6 text-sm font-bold text-gray-600">
                        <span>By {story.author}</span>
                        <span>{new Date(story.publishedAt).toLocaleDateString()}</span>
                        <span className="capitalize">{story.category}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 ml-4">
                      <button
                        onClick={() => handleEdit(story)}
                        className="bg-blue-500 text-white p-2 border-2 border-black font-black hover:bg-blue-600 transition-all"
                      >
                        <Edit className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(story.id)}
                        className="bg-red-500 text-white p-2 border-2 border-black font-black hover:bg-red-600 transition-all"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {/* Add/Edit Form */}
        {(activeTab === 'add' || activeTab === 'edit') && (
          <div className="bg-white border-4 border-black p-8">
            <h2 className="text-2xl font-black text-black mb-6">
              {editingStory ? 'EDIT STORY' : 'ADD NEW STORY'}
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-lg font-black text-black mb-2">
                    TITLE *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                    className="w-full p-3 border-4 border-black font-bold focus:outline-none focus:ring-4 focus:ring-yellow-400"
                    placeholder="Enter story title..."
                  />
                </div>
                
                <div>
                  <label className="block text-lg font-black text-black mb-2">
                    AUTHOR *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.author}
                    onChange={(e) => setFormData(prev => ({ ...prev, author: e.target.value }))}
                    className="w-full p-3 border-4 border-black font-bold focus:outline-none focus:ring-4 focus:ring-yellow-400"
                    placeholder="Author name..."
                  />
                </div>
              </div>

              <div>
                <label className="block text-lg font-black text-black mb-2">
                  EXCERPT *
                </label>
                <textarea
                  required
                  rows={3}
                  value={formData.excerpt}
                  onChange={(e) => setFormData(prev => ({ ...prev, excerpt: e.target.value }))}
                  className="w-full p-3 border-4 border-black font-bold focus:outline-none focus:ring-4 focus:ring-yellow-400"
                  placeholder="Brief description of the story..."
                />
              </div>

              <div>
                <label className="block text-lg font-black text-black mb-2">
                  CONTENT *
                </label>
                <textarea
                  required
                  rows={8}
                  value={formData.content}
                  onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
                  className="w-full p-3 border-4 border-black font-bold focus:outline-none focus:ring-4 focus:ring-yellow-400"
                  placeholder="Full story content..."
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-lg font-black text-black mb-2">
                    CATEGORY *
                  </label>
                  <select
                    required
                    value={formData.category}
                    onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                    className="w-full p-3 border-4 border-black font-bold focus:outline-none focus:ring-4 focus:ring-yellow-400"
                  >
                    {categories.filter(cat => cat.id !== 'all').map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-lg font-black text-black mb-2">
                    IMAGE URL *
                  </label>
                  <input
                    type="url"
                    required
                    value={formData.imageUrl}
                    onChange={(e) => setFormData(prev => ({ ...prev, imageUrl: e.target.value }))}
                    className="w-full p-3 border-4 border-black font-bold focus:outline-none focus:ring-4 focus:ring-yellow-400"
                    placeholder="https://images.unsplash.com/..."
                  />
                </div>
              </div>

              <div>
                <label className="block text-lg font-black text-black mb-2">
                  TAGS (comma-separated)
                </label>
                <input
                  type="text"
                  value={formData.tags}
                  onChange={(e) => setFormData(prev => ({ ...prev, tags: e.target.value }))}
                  className="w-full p-3 border-4 border-black font-bold focus:outline-none focus:ring-4 focus:ring-yellow-400"
                  placeholder="sustainability, innovation, community..."
                />
              </div>

              <div className="flex items-center space-x-3">
                <button
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, featured: !prev.featured }))}
                  className={`p-3 border-4 border-black font-black transition-all ${
                    formData.featured 
                      ? 'bg-yellow-400 text-black' 
                      : 'bg-white text-black hover:bg-gray-100'
                  }`}
                >
                  {formData.featured ? <Eye className="h-5 w-5" /> : <EyeOff className="h-5 w-5" />}
                </button>
                <span className="text-lg font-black text-black">
                  {formData.featured ? 'FEATURED STORY' : 'REGULAR STORY'}
                </span>
              </div>

              <div className="flex space-x-4">
                <button
                  type="submit"
                  className="bg-green-500 text-white px-8 py-3 border-4 border-black font-black hover:bg-green-600 transition-all flex items-center space-x-2"
                >
                  <Save className="h-5 w-5" />
                  <span>{editingStory ? 'UPDATE STORY' : 'PUBLISH STORY'}</span>
                </button>
                
                <button
                  type="button"
                  onClick={() => {
                    resetForm()
                    setActiveTab('list')
                  }}
                  className="bg-gray-500 text-white px-8 py-3 border-4 border-black font-black hover:bg-gray-600 transition-all"
                >
                  CANCEL
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}

export default CMS

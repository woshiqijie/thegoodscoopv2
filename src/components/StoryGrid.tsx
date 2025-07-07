import React from 'react'
import { Calendar, User, ArrowRight, Tag } from 'lucide-react'
import { Story } from '../types'

interface StoryGridProps {
  stories: Story[]
}

const StoryGrid: React.FC<StoryGridProps> = ({ stories }) => {
  if (stories.length === 0) {
    return (
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gray-100 border-4 border-black p-12">
            <h3 className="text-2xl font-black text-black mb-4">NO STORIES FOUND</h3>
            <p className="text-lg font-bold text-gray-700">
              Try selecting a different category or check back later for new stories.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div 
              key={story.id}
              className={`bg-white border-4 border-black overflow-hidden hover:shadow-[8px_8px_0px_0px_#000] transition-all transform hover:-translate-x-2 hover:-translate-y-2 ${
                index % 3 === 0 ? 'lg:transform lg:rotate-1' : 
                index % 3 === 1 ? 'lg:transform lg:-rotate-1' : 
                'lg:transform lg:rotate-0'
              }`}
            >
              <div className="relative">
                <img 
                  src={story.imageUrl} 
                  alt={story.title}
                  className="w-full h-48 object-cover"
                />
                {story.featured && (
                  <div className="absolute top-3 right-3">
                    <span className="bg-yellow-400 text-black px-2 py-1 border-2 border-black font-black text-xs transform rotate-12">
                      FEATURED
                    </span>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2 text-sm font-bold text-gray-600">
                    <User className="h-4 w-4" />
                    <span>{story.author}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm font-bold text-gray-600">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(story.publishedAt).toLocaleDateString()}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-black text-black mb-3 leading-tight">
                  {story.title}
                </h3>
                
                <p className="text-sm font-bold text-gray-700 mb-4">
                  {story.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {story.tags.slice(0, 2).map((tag) => (
                    <span 
                      key={tag}
                      className="bg-gray-100 text-black px-2 py-1 border-2 border-black font-bold text-xs flex items-center space-x-1"
                    >
                      <Tag className="h-3 w-3" />
                      <span>{tag}</span>
                    </span>
                  ))}
                  {story.tags.length > 2 && (
                    <span className="text-xs font-bold text-gray-500">
                      +{story.tags.length - 2} more
                    </span>
                  )}
                </div>
                
                <button className="w-full bg-black text-white py-3 border-4 border-black font-black hover:bg-yellow-400 hover:text-black transition-all flex items-center justify-center space-x-2">
                  <span>READ STORY</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StoryGrid

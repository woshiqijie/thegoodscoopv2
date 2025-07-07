import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import FeaturedStories from './components/FeaturedStories'
import CategoryFilter from './components/CategoryFilter'
import StoryGrid from './components/StoryGrid'
import CMS from './components/CMS'
import Footer from './components/Footer'
import { Story, Category } from './types'

const INITIAL_STORIES: Story[] = [
  {
    id: '1',
    title: 'Transforming Waste into Wonder: The Plastic Revolution in Jakarta',
    excerpt: 'Meet Sari Dewi, the environmental activist who turned Jakarta\'s plastic crisis into a thriving circular economy, creating jobs for 500+ families.',
    content: 'In the bustling streets of Jakarta, where plastic waste once choked waterways and littered neighborhoods, Sari Dewi saw opportunity where others saw only problems...',
    author: 'Maya Chen',
    publishedAt: '2024-01-15',
    category: 'environment',
    tags: ['sustainability', 'circular-economy', 'indonesia', 'waste-management'],
    imageUrl: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&h=600&fit=crop',
    featured: true
  },
  {
    id: '2',
    title: 'Digital Bridges: Connecting Rural Philippines to Global Opportunities',
    excerpt: 'How a former OFW built a tech education program that\'s bringing digital literacy to remote islands, one village at a time.',
    content: 'When Maria Santos returned to her hometown in Palawan after years working abroad, she brought more than just savings...',
    author: 'James Rodriguez',
    publishedAt: '2024-01-12',
    category: 'education',
    tags: ['digital-literacy', 'philippines', 'rural-development', 'technology'],
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop',
    featured: true
  },
  {
    id: '3',
    title: 'Healing Hands: Traditional Medicine Meets Modern Healthcare in Vietnam',
    excerpt: 'Dr. Nguyen Minh\'s innovative clinic combines ancient Vietnamese healing practices with cutting-edge medical technology.',
    content: 'In the heart of Ho Chi Minh City, a quiet revolution is taking place in healthcare...',
    author: 'Lisa Tran',
    publishedAt: '2024-01-10',
    category: 'health',
    tags: ['healthcare', 'traditional-medicine', 'vietnam', 'innovation'],
    imageUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop',
    featured: false
  },
  {
    id: '4',
    title: 'Seeds of Change: Empowering Women Farmers in Cambodia',
    excerpt: 'The cooperative that\'s revolutionizing agriculture while breaking gender barriers in rural Cambodia.',
    content: 'In the rice fields of Siem Reap province, a group of women farmers are rewriting the rules of agriculture...',
    author: 'David Kim',
    publishedAt: '2024-01-08',
    category: 'social-impact',
    tags: ['agriculture', 'women-empowerment', 'cambodia', 'cooperatives'],
    imageUrl: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&h=600&fit=crop',
    featured: false
  },
  {
    id: '5',
    title: 'Code for Good: Thailand\'s Youth Building Apps for Social Change',
    excerpt: 'Meet the teenage developers creating mobile solutions for everything from elderly care to disaster response.',
    content: 'In Bangkok\'s tech hubs, a new generation of young programmers is using code as a force for social good...',
    author: 'Sarah Wong',
    publishedAt: '2024-01-05',
    category: 'technology',
    tags: ['youth', 'mobile-apps', 'thailand', 'social-innovation'],
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
    featured: false
  },
  {
    id: '6',
    title: 'Ocean Guardians: Malaysia\'s Coral Restoration Heroes',
    excerpt: 'The marine biologists and local communities working together to bring Malaysia\'s coral reefs back to life.',
    content: 'Beneath the crystal-clear waters off the coast of Sabah, a remarkable restoration effort is underway...',
    author: 'Ahmad Hassan',
    publishedAt: '2024-01-03',
    category: 'environment',
    tags: ['marine-conservation', 'coral-reefs', 'malaysia', 'community-action'],
    imageUrl: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800&h=600&fit=crop',
    featured: false
  }
]

const CATEGORIES: Category[] = [
  { id: 'all', name: 'All Stories', color: 'bg-black' },
  { id: 'environment', name: 'Environment', color: 'bg-green-500' },
  { id: 'education', name: 'Education', color: 'bg-blue-500' },
  { id: 'health', name: 'Health', color: 'bg-red-500' },
  { id: 'social-impact', name: 'Social Impact', color: 'bg-purple-500' },
  { id: 'technology', name: 'Technology', color: 'bg-orange-500' }
]

function App() {
  const [stories, setStories] = useState<Story[]>(INITIAL_STORIES)
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [showCMS, setShowCMS] = useState(false)

  const filteredStories = selectedCategory === 'all' 
    ? stories 
    : stories.filter(story => story.category === selectedCategory)

  const featuredStories = stories.filter(story => story.featured)

  const handleAddStory = (newStory: Omit<Story, 'id'>) => {
    const story: Story = {
      ...newStory,
      id: Date.now().toString()
    }
    setStories(prev => [story, ...prev])
  }

  const handleUpdateStory = (updatedStory: Story) => {
    setStories(prev => prev.map(story => 
      story.id === updatedStory.id ? updatedStory : story
    ))
  }

  const handleDeleteStory = (storyId: string) => {
    setStories(prev => prev.filter(story => story.id !== storyId))
  }

  if (showCMS) {
    return (
      <CMS
        stories={stories}
        categories={CATEGORIES}
        onAddStory={handleAddStory}
        onUpdateStory={handleUpdateStory}
        onDeleteStory={handleDeleteStory}
        onClose={() => setShowCMS(false)}
      />
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Header onOpenCMS={() => setShowCMS(true)} />
      <Hero />
      <FeaturedStories stories={featuredStories} />
      <CategoryFilter 
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <StoryGrid stories={filteredStories} />
      <Footer />
    </div>
  )
}

export default App

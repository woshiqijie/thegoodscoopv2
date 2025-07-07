import React from 'react'
import { Calendar, User, ArrowRight } from 'lucide-react'
import { Story } from '../types'

interface FeaturedStoriesProps {
  stories: Story[]
}

const FeaturedStories: React.FC<FeaturedStoriesProps> = ({ stories }) => {
  if (stories.length === 0) return null

  const mainStory = stories[0]
  const sideStories = stories.slice(1, 3)

  return (
    <section className="bg-white py-16 border-b-8 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="bg-yellow-400 inline-block px-6 py-3 border-4 border-black transform -rotate-1">
            <h2 className="text-2xl font-black text-black">FEATURED STORIES</h2>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Featured Story */}
          <div className="lg:col-span-2">
            <div className="bg-white border-4 border-black overflow-hidden hover:shadow-[8px_8px_0px_0px_#000] transition-all transform hover:-translate-x-1 hover:-translate-y-1">
              <div className="relative">
                <img 
                  src={mainStory.imageUrl} 
                  alt={mainStory.title}
                  className="w-full h-64 lg:h-80 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-red-500 text-white px-3 py-1 border-2 border-black font-black text-sm transform rotate-1">
                    FEATURED
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center space-x-2 text-sm font-bold text-gray-600">
                    <User className="h-4 w-4" />
                    <span>{mainStory.author}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm font-bold text-gray-600">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(mainStory.publishedAt).toLocaleDateString()}</span>
                  </div>
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-black text-black mb-4 leading-tight">
                  {mainStory.title}
                </h3>
                
                <p className="text-lg font-bold text-gray-700 mb-6">
                  {mainStory.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {mainStory.tags.slice(0, 3).map((tag) => (
                    <span 
                      key={tag}
                      className="bg-gray-100 text-black px-3 py-1 border-2 border-black font-bold text-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                
                <button className="bg-black text-white px-6 py-3 border-4 border-black font-black hover:bg-yellow-400 hover:text-black transition-all flex items-center space-x-2">
                  <span>READ FULL STORY</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Side Featured Stories */}
          <div className="space-y-6">
            {sideStories.map((story) => (
              <div 
                key={story.id}
                className="bg-white border-4 border-black overflow-hidden hover:shadow-[4px_4px_0px_0px_#000] transition-all transform hover:-translate-x-1 hover:-translate-y-1"
              >
                <img 
                  src={story.imageUrl} 
                  alt={story.title}
                  className="w-full h-32 object-cover"
                />
                
                <div className="p-4">
                  <div className="flex items-center space-x-2 text-xs font-bold text-gray-600 mb-2">
                    <User className="h-3 w-3" />
                    <span>{story.author}</span>
                  </div>
                  
                  <h4 className="text-lg font-black text-black mb-2 leading-tight">
                    {story.title}
                  </h4>
                  
                  <p className="text-sm font-bold text-gray-700 mb-3">
                    {story.excerpt.substring(0, 100)}...
                  </p>
                  
                  <button className="text-black font-black text-sm hover:text-yellow-600 transition-colors flex items-center space-x-1">
                    <span>READ MORE</span>
                    <ArrowRight className="h-3 w-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedStories

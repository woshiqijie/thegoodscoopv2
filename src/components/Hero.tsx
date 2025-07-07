import React from 'react'
import { ArrowRight, Heart, Globe } from 'lucide-react'

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-yellow-400 via-orange-400 to-red-400 border-b-8 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-black text-white px-4 py-2 border-4 border-black transform -rotate-2">
                <span className="font-black text-sm">BREAKING BARRIERS</span>
              </div>
              <div className="bg-white text-black px-4 py-2 border-4 border-black transform rotate-1">
                <span className="font-black text-sm">CHANGING LIVES</span>
              </div>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black text-black leading-none mb-6">
              STORIES THAT
              <span className="block text-white text-stroke-black">MATTER</span>
            </h1>
            
            <p className="text-xl font-bold text-black mb-8 max-w-lg">
              Discover the changemakers, innovators, and heroes transforming Southeast Asia. 
              Real stories. Real impact. Real change.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-black text-white px-8 py-4 border-4 border-black font-black text-lg hover:bg-white hover:text-black transition-all transform hover:scale-105 flex items-center justify-center space-x-2">
                <span>READ STORIES</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="bg-white text-black px-8 py-4 border-4 border-black font-black text-lg hover:bg-black hover:text-white transition-all transform hover:scale-105">
                SUBMIT YOUR STORY
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white p-6 border-4 border-black transform rotate-2 hover:rotate-0 transition-transform">
                  <Heart className="h-8 w-8 text-red-500 mb-3" />
                  <h3 className="font-black text-lg mb-2">SOCIAL IMPACT</h3>
                  <p className="text-sm font-bold">Stories of communities coming together</p>
                </div>
                <div className="bg-green-400 p-6 border-4 border-black transform -rotate-1 hover:rotate-0 transition-transform">
                  <Globe className="h-8 w-8 text-black mb-3" />
                  <h3 className="font-black text-lg mb-2">ENVIRONMENT</h3>
                  <p className="text-sm font-bold">Protecting our planet's future</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-blue-400 p-6 border-4 border-black transform rotate-1 hover:rotate-0 transition-transform">
                  <div className="w-8 h-8 bg-black rounded-full mb-3"></div>
                  <h3 className="font-black text-lg mb-2">INNOVATION</h3>
                  <p className="text-sm font-bold">Technology for good</p>
                </div>
                <div className="bg-purple-400 p-6 border-4 border-black transform -rotate-2 hover:rotate-0 transition-transform">
                  <div className="w-8 h-8 bg-white border-2 border-black mb-3"></div>
                  <h3 className="font-black text-lg mb-2">EDUCATION</h3>
                  <p className="text-sm font-bold">Empowering through knowledge</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

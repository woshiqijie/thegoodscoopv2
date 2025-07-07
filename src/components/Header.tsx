import React from 'react'
import { Newspaper, Settings } from 'lucide-react'

interface HeaderProps {
  onOpenCMS: () => void
}

const Header: React.FC<HeaderProps> = ({ onOpenCMS }) => {
  return (
    <header className="bg-white border-b-8 border-black sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center space-x-4">
            <div className="bg-yellow-400 p-3 border-4 border-black transform rotate-3">
              <Newspaper className="h-8 w-8 text-black" />
            </div>
            <div>
              <h1 className="text-3xl font-black text-black tracking-tight">
                THE GOOD SCOOP
              </h1>
              <p className="text-sm font-bold text-gray-600 uppercase tracking-wide">
                Impact Stories • Southeast Asia
              </p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#stories" className="text-lg font-bold text-black hover:text-yellow-600 transition-colors">
              STORIES
            </a>
            <a href="#about" className="text-lg font-bold text-black hover:text-yellow-600 transition-colors">
              ABOUT
            </a>
            <a href="#contact" className="text-lg font-bold text-black hover:text-yellow-600 transition-colors">
              CONTACT
            </a>
            <button
              onClick={onOpenCMS}
              className="bg-black text-white px-6 py-3 border-4 border-black font-bold hover:bg-yellow-400 hover:text-black transition-all transform hover:scale-105 flex items-center space-x-2"
            >
              <Settings className="h-5 w-5" />
              <span>CMS</span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header

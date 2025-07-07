import React from 'react'
import { Heart, Mail, MapPin, Globe } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white border-t-8 border-yellow-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-black text-yellow-400 mb-4">THE GOOD SCOOP</h3>
            <p className="font-bold text-gray-300 mb-4">
              Amplifying voices of change across Southeast Asia. Every story matters. Every impact counts.
            </p>
            <div className="flex items-center space-x-2 text-yellow-400">
              <Heart className="h-5 w-5" />
              <span className="font-black">Made with purpose</span>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-black text-white mb-4">QUICK LINKS</h4>
            <ul className="space-y-2">
              <li><a href="#stories" className="font-bold text-gray-300 hover:text-yellow-400 transition-colors">All Stories</a></li>
              <li><a href="#featured" className="font-bold text-gray-300 hover:text-yellow-400 transition-colors">Featured</a></li>
              <li><a href="#submit" className="font-bold text-gray-300 hover:text-yellow-400 transition-colors">Submit Story</a></li>
              <li><a href="#about" className="font-bold text-gray-300 hover:text-yellow-400 transition-colors">About Us</a></li>
            </ul>
          </div>
          
          {/* Categories */}
          <div>
            <h4 className="text-lg font-black text-white mb-4">CATEGORIES</h4>
            <ul className="space-y-2">
              <li><a href="#environment" className="font-bold text-gray-300 hover:text-green-400 transition-colors">Environment</a></li>
              <li><a href="#education" className="font-bold text-gray-300 hover:text-blue-400 transition-colors">Education</a></li>
              <li><a href="#health" className="font-bold text-gray-300 hover:text-red-400 transition-colors">Health</a></li>
              <li><a href="#social" className="font-bold text-gray-300 hover:text-purple-400 transition-colors">Social Impact</a></li>
              <li><a href="#tech" className="font-bold text-gray-300 hover:text-orange-400 transition-colors">Technology</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-black text-white mb-4">GET IN TOUCH</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-yellow-400" />
                <span className="font-bold text-gray-300">stories@thegoodscoop.asia</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-yellow-400" />
                <span className="font-bold text-gray-300">Southeast Asia</span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="h-5 w-5 text-yellow-400" />
                <span className="font-bold text-gray-300">thegoodscoop.asia</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t-4 border-yellow-400 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-bold text-gray-300 mb-4 md:mb-0">
              © 2024 The Good Scoop. All rights reserved. Built with ChatAndBuild.
            </p>
            <div className="flex space-x-6">
              <a href="#privacy" className="font-bold text-gray-300 hover:text-yellow-400 transition-colors">Privacy</a>
              <a href="#terms" className="font-bold text-gray-300 hover:text-yellow-400 transition-colors">Terms</a>
              <a href="#contact" className="font-bold text-gray-300 hover:text-yellow-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

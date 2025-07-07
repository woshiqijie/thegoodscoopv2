import React from 'react'
import { Category } from '../types'

interface CategoryFilterProps {
  categories: Category[]
  selectedCategory: string
  onSelectCategory: (categoryId: string) => void
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ 
  categories, 
  selectedCategory, 
  onSelectCategory 
}) => {
  return (
    <section className="bg-gray-100 py-12 border-b-8 border-black" id="stories">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-black text-black mb-4">BROWSE BY CATEGORY</h2>
          <p className="text-lg font-bold text-gray-700">
            Filter stories by impact area to find what matters most to you
          </p>
        </div>
        
        <div className="flex flex-wrap gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onSelectCategory(category.id)}
              className={`px-6 py-3 border-4 border-black font-black text-lg transition-all transform hover:scale-105 ${
                selectedCategory === category.id
                  ? `${category.color} text-white shadow-[4px_4px_0px_0px_#000] -translate-x-1 -translate-y-1`
                  : 'bg-white text-black hover:shadow-[4px_4px_0px_0px_#000] hover:-translate-x-1 hover:-translate-y-1'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategoryFilter

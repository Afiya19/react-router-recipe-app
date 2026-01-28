import React from 'react'
import { Link } from 'react-router-dom'
import {ChefHat} from "lucide-react"

const Navigation = () => {
  return (
    <nav className="bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <Link to="/" className="flex items-center space-x-2 text-2xl font-bold hover:opacity-80 transition">
            <ChefHat size={32} />
            <span>RecipeHub</span>
          </Link>

          {/* Navigation Links */}
          <div className="flex space-x-6">
            <Link to="/" className="hover:text-orange-200 transition font-medium">
              Home
            </Link>
            <Link to="/categories" className="hover:text-orange-200 transition font-medium">
              Categories
            </Link>
            <Link to="/favorites" className="hover:text-orange-200 transition font-medium">
              Favorites
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation

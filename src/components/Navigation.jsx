import React from 'react'
import { Link } from 'react-router-dom'
import {ChefHat} from "lucide-react"

const Navigation = () => {
  return (
    <nav className='bg-orange-500 text-white px-6 py-4 flex justify-between'>
      <Link to="/" className='flex items-center gap-2 font-bold text-xl'>
      <ChefHat/>
      RecipeHub
      </Link>
      <div className='flex gap-6'>
        <Link to="/">Home</Link>
        <Link to="/categories">Categories</Link>
        <Link to="/favorites">Favorites</Link>
      </div>
    </nav>
  )
}

export default Navigation

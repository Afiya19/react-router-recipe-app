import React, { useState } from 'react';
import RecipeCard from '../components/RecipeCard';
import { Search } from 'lucide-react';

const HomePage = ({recipes, favorites, toggleFavorite, onNavigate}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredRecipes = recipes?.filter(recipe => recipe.name.toLowerCase().includes(searchTerm.toLowerCase()));
  
  return (
    <div className='min-h-screen bg-gradient-to-br from-orange-50 to-red-50'>
      <div className='max-w-7xl mx-auto px-4 py-12'>
        <div className='text-center mb-12'>
          <h1 className='text-5xl font-bold text-gray-800 mb-4'>
            Discover Amazing Recipes
          </h1>
          <p className='text-xl text-gray-600'>Find your next favorite meal</p>
        </div>

        <div className='max-w-2xl mx-auto mb-12'>
          <div className='relative'>
            <input
              type="text"
              placeholder='Search recipes...'
              value = {searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className='w-full px-6 py-4 pl-14 text-lg rounded-full border-2 border-orange-300 focus:border-orange-500 focus:outline-none shadow-md'
            />
            <Search className='absolute left-5 top-5 text-gray-400' size={24}/>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {filteredRecipes?.map(recipe => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              isFavorite={favorites.includes(recipe.id)}
              onToggleFavorite={toggleFavorite}
              onClick={() => onNavigate('recipe', recipe.id)}
            />
          ))}
        </div>
        {filteredRecipes?.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-500">
              No recipes found. Try a different search!
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default HomePage

import { Clock, Heart, Users } from 'lucide-react'
import React from 'react'

const RecipeCard = ({recipe,isFavorite,onToggleFavorite,onClick}) => {
  return (
    <div 
    onClick={onClick}
    className='bg-white rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer transform hover:-translate-y-1'
    >
      <div className='p-6'>
        <div className='text-6xl text-center mb-4'>{recipe.image}</div>
        <h3 className='text-xl font-bold text-gray-800 mb-2'>{recipe.name}</h3>
        <div className='flex items-center justify-between text-sm text-gray-600 mb-3'>
          <span className='flex items-center'>
            <Clock size={16} className="mr-1"/>
            {recipe.time}
          </span>
          <span className='flex items-center'>
            <Users size={16} className='mr-1'/>
            {recipe.servings}
          </span>
        </div>
        <div className='flex items-center justify-between'>
          <span className='px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium capitalize'>
            {recipe.category}
          </span>
          <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(recipe.id);
          }}
          className='p-2 hover:bg-red-50 rounded-full transition'
          >
            <Heart
              size={20}
              className={isFavorite? "fill-red-500 text-red-500": "text-gray-400"}
            />
          </button>
        </div>
        
      </div>
      
    </div>
  )
}

export default RecipeCard

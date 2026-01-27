import React from 'react'

const RecipeCard = ({recipe,onClick}) => {
  return (
    <div 
    onClick={onClick}
    className='bg-white p-4 rounded shadow cursor-pointer'
    >
      <div className='text-4xl'>{recipe.image}</div>
      <div className='font-bold'>{recipe.name}</div>
      
    </div>
  )
}

export default RecipeCard

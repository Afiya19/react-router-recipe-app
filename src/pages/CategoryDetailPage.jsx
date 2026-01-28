import React from 'react'
import { useParams } from 'react-router-dom'
import { recipes } from '../data/recipes';

const CategoryDetailPage = () => {
  const {category} = useParams();

  const filteredRecipes = recipes.filter(recipe => recipe.category === category);
  return (
    <div>
      <h1>{category}</h1>
      {filteredRecipes.map((recipe) => (
        <div key={recipe.id}>
            {recipe.name}
        </div>
      ))}
    </div>
  )
}

export default CategoryDetailPage

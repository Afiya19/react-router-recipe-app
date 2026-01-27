import React from 'react'
import { useNavigate } from 'react-router-dom'
import { recipes } from '../data/recipes';
import RecipeCard from '../components/RecipeCard';

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div>
     {recipes.map(recipe => (
      <RecipeCard
        key={recipe.id}
        recipe={recipe}
        onClick={() => navigate(`/recipe/${recipe.id}`)}
      />
     ))

     }
    </div>
  )
}

export default HomePage

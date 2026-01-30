import React from 'react';
import { ArrowLeft } from 'lucide-react';
import RecipeCard from '../components/RecipeCard';

const CategoryDetailPage = ({ recipes, categoryName, favorites, toggleFavorite, onNavigate }) => {

  const categoryRecipes = recipes?.filter(r => r.category === categoryName);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        

        <button
          onClick={() => onNavigate('categories')}
          className="flex items-center text-orange-600 hover:text-orange-700 mb-6 font-medium"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Categories
        </button>
        

        <h1 className="text-4xl font-bold text-gray-800 mb-8 capitalize">
          {categoryName} Recipes
        </h1>
        

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryRecipes.map(recipe => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              isFavorite={favorites.includes(recipe.id)}
              onToggleFavorite={toggleFavorite}
              onClick={() => onNavigate('recipe', recipe.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryDetailPage;
import React from 'react';
import CategoryCard from '../components/CategoryCard';

const CategoriesPage = ({ recipes, onNavigate }) => {

  const categories = [
    { name: 'breakfast', emoji: '🌅' },
    { name: 'lunch', emoji: '🌞' },
    { name: 'dinner', emoji: '🌙' },
    { name: 'dessert', emoji: '🍰' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        

        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Recipe Categories
        </h1>
        

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map(category => {

            const recipeCount = recipes.filter(r => r.category === category.name).length;
            
            return (
              <CategoryCard
                key={category.name}
                category={category.name}
                emoji={category.emoji}
                recipeCount={recipeCount}
                onClick={() => onNavigate('category', category.name)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
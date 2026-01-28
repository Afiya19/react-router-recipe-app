import React from 'react'
import { recipes } from '../data/recipes'
import { Link } from 'react-router-dom';

const CategoriesPage = () => {
  //to remove dupicates we are using set then later converting back to array
  const categories =[...new Set(recipes.map(r => r.category))];
  return (
    <div>
      <h1>Categories</h1>
      {categories.map((category) => (
        <div key={category}>
          <Link to={`/category/${category}`}>
              {category}
          </Link>
        </div>
      ))}
    </div>
  )
}

export default CategoriesPage

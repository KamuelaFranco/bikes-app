import React from 'react';
import Category from './Category';

const CategoryMenu = ({ categories, changeCategory }) => {
  const allCategories = categories || ['all', 'endurance', 'comfort', 'racing'];
  const categoriesList = allCategories.map(category =>
    <Category name={category} changeCategory={changeCategory} key={`category-${category}`} />
  );
  return (
    <div className="category-menu">
      {categoriesList}
    </div>
  );
};

export default CategoryMenu;

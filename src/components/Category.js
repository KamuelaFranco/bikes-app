import React from 'react';

function handleClick(changeCategory, name) {
  return () => changeCategory(name);
}

const Category = ({ changeCategory, name }) => {
  const formattedName = name && name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase();
  return <button className="category" onClick={handleClick(changeCategory, name)}>{formattedName}</button>;
};

export default Category;

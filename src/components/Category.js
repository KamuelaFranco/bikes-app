// const React = require('react');
// const { Component } = require('react');

// class Category extends Component {
//   handleClick(e) {
//     this.props.changeCategory(this.props.name);
//   }

// 	render () {
//     let formattedName = this.props.name
//       && this.props.name.slice(0,1).toUpperCase() + this.props.name.slice(1).toLowerCase();
// 		return (
// 			<div className="category">
//         <button onClick={this.handleClick.bind(this)}>
//           {formattedName}
//         </button>
// 			</div>
// 		);
// 	}
// }

// module.exports = Category;

import React from 'react';

function handleClick(changeCategory, name) {
  return () => changeCategory(name);
}

const Category = ({ changeCategory, name }) => {
  const formattedName = name && name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase();
  return (
    <div className="category">
      <button onClick={handleClick(changeCategory, name)}>{formattedName}</button>
    </div>
  );
};

export default Category;

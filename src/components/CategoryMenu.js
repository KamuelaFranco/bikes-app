const React = require('react');
const { Component } = require('react');
const Category = require('./Category');

class CategoryMenu extends Component {
  renderCategories () {
    const categories = ['Top', 'New', 'Poker', 'Blackjack', 'Fun', 'Ball',  'Virtual', 'All'];
    return categories
      .map(category =>
        <Category
          name={category}
          changeCategory={this.props.changeCategory}
          key={Math.random()*100} // TODO: Fix this Unique ID gen
        />
      );
  }

	render () {
		return (
      <div className="category-menu">
        {this.renderCategories()}
      </div>
		);
	}
}

module.exports = CategoryMenu;
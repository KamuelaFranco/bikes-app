import React from 'react';
import Item from './Item';

class ItemList extends React.Component {
	getCurrentFilteredItems() {
    if (!this.props.category) {
      return null;
    } else if (this.props.category.toLowerCase() === 'all') {
      return this.props.items.map(item => {
        return (
          <Item
            name={item.name}
            image={item.image.thumb}
            key={item.id}
          />
        );
      });
    }

    return this.props.items
      .filter(item => item.class.includes(this.props.category.toLowerCase()))
      .map(item => (
        <Item
          name={item.name}
          image={item.image.thumb}
          key={item.id}
        />
      ));
  }

	render () {
    const formattedCategory = this.props.category
      && this.props.category.slice(0, 1).toUpperCase() + this.props.category.slice(1).toLowerCase();
		return (
			<div className="item-list">
        <h1 className="category-title">{formattedCategory}</h1>
        {this.getCurrentFilteredItems()}
			</div>
		);
	}
}

export default ItemList;

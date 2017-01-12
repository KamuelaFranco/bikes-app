import React from 'react';

const Item = ({ name, thumbnail, image }) => (
  <div className="item">
    <span className="item-name">{name}</span>
    <img alt={name} src={image} />
  </div>
);

export default Item;

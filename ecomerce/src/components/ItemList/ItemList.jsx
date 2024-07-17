import React from 'react';
import Item from '../Item/Item';

const ItemList = ({ products }) => {
  return (
    <div>
      {products.map((product) => (
        <div>
          <Item key={product.id} {...product}></Item>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default ItemList;

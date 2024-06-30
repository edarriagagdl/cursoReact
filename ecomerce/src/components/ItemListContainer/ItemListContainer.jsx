import React from 'react';
import { useState } from 'react';

const categories = [
  {
    id: 1,
    name: 'Pasteles',
    description: 'Pasteles de todo tipo',
    img: 'https://pasteleriasmarisa.com.mx/dyn/wp-content/uploads/2015/07/Pastel-Chocolate-2.jpg',
  },
  {
    id: 2,
    name: 'Galletas',
    description: 'Galletas de todo tipo',
    img: 'https://cdn0.recetasgratis.net/es/posts/3/0/3/galletas_de_avena_faciles_y_rapidas_67303_600.webp',
  },
  {
    id: 3,
    name: 'Cupcakes',
    description: 'Cupcakes de todo tipo',
    img: 'https://via.placeholder.com/150',
  },
  {
    id: 4,
    name: 'Muffins',
    description: 'Muffins de todo tipo',
    img: 'https://cdn.recetasderechupete.com/wp-content/uploads/2015/03/muffins_chocolate.jpg',
  },
  {
    id: 5,
    name: 'Panaderia',
    description: 'Panaderia de todo tipo',
    img: 'https://via.placeholder.com/150',
  },
];

function ItemListContainer(grettings) {
  return (
    <>
      <h2 className="h2">{grettings.grettings}</h2>
      <ul className="list-group">
        {categories.map((category) => (
          <li className="list-group-item" key={category.id}>
            <div className="card" style={{ width: '18rem' }}>
              <img
                src={category.img}
                className="card-img-top"
                alt={category.name}
              />
              <div className="card-body">
                <h5 className="card-title">{category.name}</h5>
                <p className="card-text">{category.description} </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ItemListContainer;

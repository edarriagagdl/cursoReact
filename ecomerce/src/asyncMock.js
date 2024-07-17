const products = [
  {
    id: 1,
    name: 'Pastel de chocolate',
    price: 100,
    category: 'Pasteles',
    img: 'https://pasteleriasmarisa.com.mx/dyn/wp-content/uploads/2015/07/Pastel-Chocolate-2.jpg',
    stock: 12,
    description: 'Pastel de chocolate',
  },
  {
    id: 2,
    name: 'Pastel de fresa',
    price: 200,
    category: 'Pasteles',
    img: 'https://pasteleriasmarisa.com.mx/wp-content/uploads/2024/05/Pastel-frutas-2.jpeg',
    stock: 5,
    description: 'Pastel de fresa',
  },
  {
    id: 3,
    name: 'Pastel de vainilla',
    price: 300,
    category: 'Pasteles',
    img: 'https://pasteleriasmarisa.com.mx/wp-content/uploads/2024/05/pastel-tres-leches-2.jpeg',
    stock: 3,
    description: 'Pastel de vainilla',
  },

  {
    id: 4,
    name: 'Galletas de chocolate',
    price: 50,
    category: 'Galletas',
    img: 'https://pasteleriasmarisa.com.mx/wp-content/uploads/2024/05/Galleta-Doble-Chocolate-1.jpeg',
    stock: 10,
    description: 'Galletas de chocolate',
  },
  {
    id: 5,
    name: 'Galletas de vainilla',
    price: 50,
    category: 'Galletas',
    img: 'https://pasteleriasmarisa.com.mx/wp-content/uploads/2024/05/Galleta-Espejo-1.jpeg',
    stock: 10,
    description: 'Galletas de vainilla',
  },
  {
    id: 6,
    name: 'Galletas de fresa',
    price: 50,
    category: 'Galletas',
    img: 'https://pasteleriasmarisa.com.mx/wp-content/uploads/2024/04/Galleta-Centenario-2-1.jpeg',
    stock: 10,
    description: 'Galletas de fresa',
  },
  {
    id: 7,
    name: 'Cupcake de chocolate',
    price: 50,
    category: 'Cupcakes',
    img: 'https://pasteleriasmarisa.com.mx/wp-content/uploads/2024/04/Muffin-Chocolate-1.jpeg',
    stock: 10,
    description: 'Cupcake de chocolate',
  },
  {
    id: 8,
    name: 'Cupcake de vainilla',
    price: 50,
    category: 'Cupcakes',
    img: 'https://pasteleriasmarisa.com.mx/wp-content/uploads/2024/04/Muffin-zanahoria-2.jpeg',
    stock: 10,
    description: 'Cupcake de vainilla',
  },
  {
    id: 9,
    name: 'Cupcake de fresa',
    price: 50,
    category: 'Cupcakes',
    img: 'https://pasteleriasmarisa.com.mx/wp-content/uploads/2024/04/Muffin-red-velvet-2.jpeg',

    stock: 10,
    description: 'Cupcake de fresa',
  },
  {
    id: 10,
    name: 'Muffin de chocolate',
    price: 50,
    category: 'Muffins',
    img: 'https://pasteleriasmarisa.com.mx/wp-content/uploads/2024/04/Muffin-Chocolate-1.jpeg',
    stock: 10,
    description: 'Muffin de chocolate',
  },
];

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

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products.find((product) => product.id == id);
      resolve(product);
    }, 2000);
  });
};

export const getProductsByCategory = (category) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const filteredProducts = products.filter(
        (product) => product.category === category
      );
      resolve(filteredProducts);
    }, 2000);
  });
};

export const getCategories = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(categories);
    }, 2000);
  });
};

import { useParams } from 'react-router-dom';
import { getProducts, getProductsByCategory } from '../../asyncMock';
import ItemList from '../ItemList/ItemList';
import { useEffect, useState } from 'react';

const ItemListContainer = ({ greetings }) => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();
  console.log(category);
  useEffect(() => {
    if (!category) {
      getProducts()
        .then((products) => {
          setProducts(products);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      getProductsByCategory(category)
        .then((products) => {
          setProducts(products);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [category]);

  return (
    <div>
      <h1>{greetings}</h1>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;

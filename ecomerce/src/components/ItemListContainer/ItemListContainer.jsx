import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import { useEffect, useState } from 'react';
import { db } from '../../services/firebase';
import { collection, query } from 'firebase/firestore';
import { getDocs, where } from 'firebase/firestore';
import { useNotification } from '../../context/NotificationContext';

const ItemListContainer = ({ greetings }) => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();
  const { setNotification } = useNotification();

  useEffect(() => {
    const collectionRef = category
      ? query(collection(db, 'products'), where('category', '==', category))
      : collection(db, 'products');
    getDocs(collectionRef)
      .then((querySnapshot) => {
        const products = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(products);
      })
      .catch((error) => {
        setNotification('error', 'Error al cargar los productos');
      });
  }, [category]);

  return (
    <div>
      <h1>{greetings}</h1>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;

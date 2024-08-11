import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../services/firebase';
import { useNotification } from '../../context/NotificationContext';

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState();
  const { id } = useParams();
  const { setNotification } = useNotification();

  useEffect(() => {
    getDoc(doc(db, 'products', id))
      .then((querySnapshot) => {
        setProduct({ id: querySnapshot.id, ...querySnapshot.data() });
      })
      .catch((error) => {
        setNotification('error', 'Error al cargar el producto');
      });
  }, [id]);

  return (
    <div>
      <ItemDetail {...product} />
    </div>
  );
};

export default ItemDetailContainer;

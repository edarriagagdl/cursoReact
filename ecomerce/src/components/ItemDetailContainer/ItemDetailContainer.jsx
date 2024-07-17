import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../asyncMock';
import ItemDetail from '../ItemDetail/ItemDetail';

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState();
  const { id } = useParams();
  useEffect(() => {
    console.log(id);
    getProductById(id)
      .then((product) => {
        setProduct(product);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <div>
      <ItemDetail {...product} />
    </div>
  );
};

export default ItemDetailContainer;

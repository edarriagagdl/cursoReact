import { NavLink } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';
import { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { useNotification } from '../../context/NotificationContext';

const ItemDetail = ({ id, name, price, category, img, stock, description }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);
  const { addItem } = useContext(CartContext);
  const { setNotification } = useNotification();

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);
    const item = { id, name, price };
    addItem(item, quantity);
    setNotification('sucess', `Se agregaron ${quantity} de ${name} al carrito`);
  };

  return (
    <div className="card">
      <img className="card-img-top" src={img} alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">Precio: ${price}</p>
        <p className="card-text">Stock: {stock}</p>
        <footer className="card-footer">
          {quantityAdded > 0 ? (
            <NavLink to="/cart" className="btn btn-primary">
              Terminar mi compra
            </NavLink>
          ) : (
            <ItemCount initialValue={1} stock={stock} onAdd={handleOnAdd} />
          )}
        </footer>
      </div>
    </div>
  );
};

export default ItemDetail;

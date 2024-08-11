import cart from '../../assets/pastel-de-cumpleanos.png';
import React from 'react';
import { CartContext, useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import './CartWidget.css';

const CartWidget = () => {
  const { totalQty } = useCartContext(CartContext);

  return (
    <Link
      to="/cart"
      className="CartWidget"
      style={{ display: totalQty > 0 ? 'block' : 'none' }}
    >
      <img className="CartImg" src={cart} alt="Cart" />
      <span>{totalQty}</span>
    </Link>
  );
};

export default CartWidget;

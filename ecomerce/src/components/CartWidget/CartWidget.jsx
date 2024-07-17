import cart from '../../assets/pastel-de-cumpleanos.png';
import React from 'react';

function CartWidget() {
  return (
    <div>
      <img src={cart} alt="cart" width="30" />
    </div>
  );
}

export default CartWidget;

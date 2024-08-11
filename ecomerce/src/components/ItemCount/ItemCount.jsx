import { useState } from 'react';
import './ItemCount.css';

export const ItemCount = ({ initialValue = 1, stock, onAdd }) => {
  const [count, setCount] = useState(initialValue);

  const decrement = () => {
    if (count <= 1) return;
    setCount((prev) => prev - 1);
  };

  const increment = () => {
    if (count >= stock) return;
    setCount((prev) => prev + 1);
  };

  return (
    <>
      <div className="item-count">
        <button className="btn" onClick={decrement}>
          -1
        </button>
        <h2>{count}</h2>
        <button className="btn" onClick={increment}>
          +1
        </button>
        <button className="btn btn-primary" onClick={() => onAdd(count)}>
          Agregar al Carrito
        </button>
      </div>
    </>
  );
};

export default ItemCount;

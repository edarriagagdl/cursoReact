import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';

const ItemDetail = ({ id, name, price, category, img, stock, description }) => {
  return (
    <div className="card">
      <img className="card-img-top" src={img} alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">Precio: ${price}</p>
        <p className="card-text">Stock: {stock}</p>
        <ItemCount stock={stock} />
      </div>
    </div>
  );
};

export default ItemDetail;

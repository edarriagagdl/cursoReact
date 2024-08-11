import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({ id, name, price, category, img, stock, description }) => {
  return (
    <div className="card" key={id}>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <img className="card-img-top" src={img} alt={name} />
        <p className="card-text">Precio: ${price}</p>
        <Link className="btn btn-primary" to={`/detail/${id}`}>
          Ver más detalles
        </Link>
      </div>
    </div>
  );
};

export default Item;

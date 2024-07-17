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
        <Link to={`/detail/${id}`}>Ver más detalles</Link>
      </div>
    </div>

    // <div key={id}>
    //   <h2>{name}</h2>
    //   <p>{description}</p>
    //   <img src={img} alt={name} />
    //   <h2>Precio: ${price}</h2>
    //   <Link to={`/detail/${id}`}>Ver más detalles</Link>
    //   <br />
    // </div>
  );
};

export default Item;

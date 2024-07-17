import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar">
      <h1 className="navbar-brand">Ecomerce</h1>
      <section className="navbar-links">
        <Link className="navbar-link" to="/category/Pasteles">
          Pasteles
        </Link>
        <Link className="navbar-link" to="/category/Galletas">
          Galletas
        </Link>
        <Link className="navbar-link" to="/category/Cupcakes">
          Cupcakes
        </Link>
      </section>
      <CartWidget />
    </nav>
  );
}

export default NavBar;

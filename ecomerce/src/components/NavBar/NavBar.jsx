import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import { NavLink, Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar">
      {/* <h1 className="navbar-brand">Ecomerce</h1> */}
      <div className="navbar-header">
        <Link className="navbar-brand" to="/">
          Ecomerce
        </Link>
        <CartWidget />
      </div>

      <section className="navbar-links">
        <NavLink
          to="/category/Pasteles"
          className={({ isActive }) => (isActive ? 'ActiveOption' : 'Option')}
        >
          Pasteles
        </NavLink>
        <NavLink
          to="/category/Galletas"
          className={({ isActive }) => (isActive ? 'ActiveOption' : 'Option')}
        >
          Galletas
        </NavLink>
        <NavLink
          to="/category/Cupcakes"
          className={({ isActive }) => (isActive ? 'ActiveOption' : 'Option')}
        >
          Cupcakes
        </NavLink>
      </section>
    </nav>
  );
}

export default NavBar;

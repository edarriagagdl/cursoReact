import reactLogo from './assets/react.svg';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import viteLogo from '/vite.svg';
import { useState } from 'react';

function App() {
  const [cartCount, setCartCount] = useState(5);

  return (
    <>
      <NavBar cartCount={cartCount} title="Mi Tienda" />
      <button
        className="btn btn-primary"
        onClick={() => setCartCount(cartCount + 1)}
      >
        Agregar al carrito
      </button>
      <ItemListContainer grettings="Bienvenido a la pasteleria de Eduardo"></ItemListContainer>
    </>
  );
}

export default App;

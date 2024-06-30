import React from 'react';
import logo from '../../assets/img/pastel-de-cumpleanos.png';

function CardWidget({ cartCount }) {
  return (
    <div className="card-widget">
      <div className="card-widget__icon">
        <i className="fas fa-shopping-cart"></i>
      </div>
      <div className="card-widget__counter">
        <a>
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-cart3"
            viewBox="0 0 16 16"
          >
            <path d="M0 0h16v16H0V0z" fill="none" />
            <path d="M1.5 1.5h2.75l1.69 6.776 8.81-.883L15.5 3H4.5m1 2h9.75L12.5 12H3.5l-1-4z" />
          </svg> */}
          <img src={logo} style={{ width: '2rem' }} alt="" />
          <span className="badge bg-primary rounded-pill">{cartCount}</span>
        </a>
      </div>
    </div>
  );
}

export default CardWidget;

import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Navigation.css';

function Navigation() {
  return (
    <nav className="header">
      <h1>Bookstore CMS</h1>
      <ul>
        <li className="BOOKS">
          <Link to="/">BOOKS</Link>
        </li>
        <li className="CATEGORIES">
          <Link to="/category">CATEGORIES</Link>
        </li>
      </ul>
      <div className="oval">
        <div className="USER-ICON">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#0290ff"
            width="1.5rem"
            height="1.5rem"
            viewBox="0 0 32 32"
            version="1.1"
          >
            <path d="M4 28q0 0.832 0.576 1.44t1.44 0.576h20q0.8 0 1.408-0.576t0.576-1.44q0-1.44-0.672-2.912t-1.76-2.624-2.496-2.144-2.88-1.504q1.76-1.088 2.784-2.912t1.024-3.904v-1.984q0-3.328-2.336-5.664t-5.664-2.336-5.664 2.336-2.336 5.664v1.984q0 2.112 1.024 3.904t2.784 2.912q-1.504 0.544-2.88 1.504t-2.496 2.144-1.76 2.624-0.672 2.912z" />
          </svg>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;

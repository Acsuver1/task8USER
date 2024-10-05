import React from 'react';
import { Link } from 'react-router-dom';
import './Layout.css'; 

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <nav className="navbar">
        <Link to="/login" className="nav-link">Login</Link>
        <Link to="/register" className="nav-link">Register</Link>
        <Link to="/quotes" className="nav-link">Quotes</Link>
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default Layout;

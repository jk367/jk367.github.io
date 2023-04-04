import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="header-name">
        James Kettle
      </Link>
      <nav className="header-nav">
        <Link to="/About">
          About
        </Link>
        <Link to="/Portfolio">
          Portfolio
        </Link>
        <Link to="/Writing">
          Writing
        </Link>
        <Link to="/Music">
          Music
        </Link>
      </nav>
    </header>
  );
};

export default Header;

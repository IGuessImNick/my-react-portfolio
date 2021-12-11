import React from 'react';
// Here we are importing a CSS file as a dependency
import '../styles/Header.css';

function Header() {
  return (
    <header className="header vh-100 vw-100">
      <h1>Home</h1>
    </header>
  );
}

export default Header;
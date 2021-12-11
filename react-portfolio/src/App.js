import React from 'react';
import { Navbar, NavbarBrand } from 'react-bootstrap';
import './App.css'

import 'bootstrap/dist/css/bootstrap.css';

// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
function App() {
  return (
    <div className='App'>
      <Navbar bg="myBlack" variant="dark">
        <Navbar.Brand>

          Logo
        </Navbar.Brand>
      </Navbar>
    </div>
  );
}

export default App;

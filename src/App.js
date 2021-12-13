import React from 'react';
// import { Navbar, NavbarBrand } from 'react-bootstrap';
import './App.css'
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.css';

// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
function App() {
  return (
    <div className='App'>
      <Header />
      <About />
      <Projects />
      <br/>
      <div position="fixed-bottom">
        <Footer />  
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import './App.scss';

// Custom Components import
import Header from './Components/Header';
import Filter from './Components/Filters';
import ProductWrapper from './Components/ProductWrapper';
import CartWrapper from './Components/Cart/CartWrapper';
import Footer from './Components/Footer';



function App() {
  return (
    <div className="App">
      <Header/>
      <Filter/>
      <ProductWrapper/>
      <CartWrapper/>
      <Footer/>
    </div>
  );
}

export default App;

import React from 'react';
import './App.scss';

// Custom Components import
import Header from './Components/Header';
import Filter from './Components/Filters';
import ProductWrapper from './Components/ProductWrapper';
import Footer from './Components/Footer';



function App() {
  return (
    <div className="App">
      <Header/>
      <Filter/>
      <ProductWrapper/>
      <Footer/>
    </div>
  );
}

export default App;

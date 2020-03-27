import React from 'react';
import {useSelector, useDispatch} from "react-redux";

import './App.scss';

// Custom Components import
import Header from './Components/Header';
import Filter from './Components/Filters';
import ProductWrapper from './Components/ProductWrapper';
import CartWrapper from './Components/Cart/CartWrapper';
import PriceDetails from './Components/Cart/PriceDetails';
import Footer from './Components/Footer';

function App() {
  const count = useSelector(state => state.selectedItems.length)

  return (
    <div className="App">
      <Header count={count}/>
      <Filter/>
      <ProductWrapper/>
      <CartWrapper/>
      <PriceDetails/>
      <Footer/>
    </div>
  );
}

export default App;

import React from 'react';
import {useSelector} from "react-redux";

import './App.scss';

// Custom Components import
import Header from './Components/Header';
import Filter from './Components/Filters';
import ProductWrapper from './Components/ProductWrapper';
import CartWrapper from './Components/Cart/CartWrapper';
import PriceDetails from './Components/Cart/PriceDetails';
import Footer from './Components/Footer';

function App() {
  const count = useSelector(state => state.selectedItems.length);
  const total = useSelector(state => state.total);
  const totalDiscount = useSelector(state => state.totalDiscount);

  return (
    <div className="App">
      <Header count={count} />
      <Filter/>
      <ProductWrapper/>
      <CartWrapper/>
      <PriceDetails count={count} total={total} totalDiscount={totalDiscount}/>
      <Footer/>
    </div>
  );
}

export default App;

import React from 'react';
import {useSelector} from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';

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
    <BrowserRouter>
      <div className="App">
        <Header count={count} />
        <Route path="/cart" exact component={Filter}/>
        <Route path="/cart" exact component={ProductWrapper} />
        { total
        ?<div className="cart__wrapper">
          <Route path="/cart-items" exact component={CartWrapper}/>
          <Route path="/cart-items" exact component={() => 
          <PriceDetails count={count} total={total} totalDiscount={totalDiscount}/>} />
        </div>
        :<Route path="/cart-items" exact render={() => <div className="cart__empty text--center upper--case">Cart is Empty</div>} />
        }
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;

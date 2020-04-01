import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { lowToHigh, highToLow, sortByDiscount  } from "./actions/actions";

import "./App.scss";

// Custom Components import
import Header from "./Components/Header";
import Filter from "./Components/Filters";
import ProductWrapper from "./Components/ProductWrapper";
import CartWrapper from "./Components/Cart/CartWrapper";
import PriceDetails from "./Components/Cart/PriceDetails";
import Footer from "./Components/Footer";

function App() {
  const count = useSelector(state => state.selectedItems.length);
  const total = useSelector(state => state.total);
  const totalDiscount = useSelector(state => state.totalDiscount);
  const dispatch = useDispatch();
  const [state, setState] = useState("a")

  const handleActive = () => {
    setState("c")
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Header count={count} />
        {/* <div onClick={() => handleActive()}>{state}</div> */}
        {/* <div>b</div> */}

        <Route path="/cart" exact>
          <Filter 
            lowToHigh = {() => dispatch(lowToHigh())}
            highToLow = {() => dispatch(highToLow())}
            sortByDiscount = {() => dispatch(sortByDiscount())}
          />
        </Route>
        <Route path="/cart" exact component={ProductWrapper} />
        {total ? (
          <div className="cart__wrapper">
            <Route path="/cart-items" exact component={CartWrapper} />
            <Route
              path="/cart-items"
              exact
              component={() => (
                <PriceDetails
                  count={count}
                  total={total}
                  totalDiscount={totalDiscount}
                />
              )}
            />
          </div>
        ) : (
          <Route
            path="/cart-items"
            exact
            render={() => (
              <div className="cart__empty text--center upper--case">
                Cart is Empty
              </div>
            )}
          />
        )}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

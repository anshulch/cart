import React, {Component} from 'react';
import CartItem from './Cart';

class CartWrapper extends Component{
    render(){
        return(
            <section className="cart__item__wrapper">
                <CartItem/>
                <CartItem/>
            </section>
        )
    }
}
export default CartWrapper;

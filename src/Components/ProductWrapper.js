import React, {Component} from 'react';
import Product from './Product';

class ProductWrapper extends Component{
    render(){
        return(
            <section className="product__wrapper">
                <Product/>
                <Product/>
                <Product/>
                <Product/>
            </section>
        )
    }
}

export default ProductWrapper;
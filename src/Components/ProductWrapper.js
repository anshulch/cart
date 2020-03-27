import React, {Component} from 'react';
import Product from './Product';
import { connect } from 'react-redux';
import { fetchItems } from '../actions/actions';

class ProductWrapper extends Component{
    componentDidMount(){
        this.props.fetchItems();
    }
    render(){
        const product = this.props.products.map((item) => {
            return(
                <Product key={item.id}
                    itemClickHandler={this.props.addToCart}
                    prodName={item.name}
                    prodId={item.id}
                    prodPrice={item.price}
                    discount={item.discount}
                />
            )
        })
        return(
            <section className="product__wrapper">
                {product}
            </section>
        )
    }
}

const mapStateToProps = state =>{
    return{
        // product: state.product
        products: state.products
    }
}

const mapDispatchToProps = dispatch => {
    return{
        addToCart: (e) =>{
            dispatch({ type: "UPDATE_CART", elem: e.target.getAttribute("data-id") })
        },
        fetchItems: () => dispatch(fetchItems())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductWrapper);
import React, {Component} from 'react';
import Product from './Product';
import { connect } from 'react-redux';
import { fetchItems } from '../actions/actions';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBug } from '@fortawesome/free-solid-svg-icons';

class ProductWrapper extends Component{
    componentDidMount(){
        this.props.fetchItems();
    }
    render(){
        let product;
        if(this.props.products.length){
            product = this.props.products.map((item) => {
                return(
                    <Product key={item.id}
                        itemClickHandler={this.props.addToCart}
                        prodName={item.name}
                        prodImg={item.img_url}
                        prodId={item.id}
                        prodPrice={item.price}
                        discount={item.discount}
                    />
                )
            })
        }
        
        return(
            <section className="product__wrapper">
                {
                    this.props.error 
                    ? <div className="error__msg text--center"><div></div><FontAwesomeIcon className="fa--white" icon={faBug} /><div></div>{this.props.error}</div>
                    : product 
                }
            </section>
        )
    }
}

const mapStateToProps = state =>{
    return{
        products: state.products,
        error: state.error
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
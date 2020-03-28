import React, {Component} from 'react';
import { connect } from 'react-redux';
import CartItem from './Cart';

class CartWrapper extends Component{
    render(){
        const items = this.props.selectedItems.map(item => {
            return(
            <CartItem key={item.id}
            itemDeleteHandler={this.props.deleteItem}
            incrementHandler={this.props.incrementQty}
            decrementHandler={this.props.decrementQty}
            prodName={item.name}
            prodId={item.id}
            prodPrice={item.price}
            qty={item.productQty}
            discount={item.discount}/>
            )
        })
        return(
            <section className="cart__item__wrapper">
                {/* <div>hi{this.props.selectedItems.length}</div> */}
                {items}
            </section>
        )
    }
}

const mapStateToProps = state =>{
    return{
        selectedItems: state.selectedItems
    }
}
const mapDispatchToProps = dispatch => {
    return{
        deleteItem: (e) =>{
            dispatch({ 
                type: "DELETE_ITEM", 
                elem: e.target.getAttribute("data-id"), 
                elemQty: e.target.getAttribute("data-qty"),
                elemPrice: e.target.getAttribute("data-price"),
                elemDiscount: e.target.getAttribute("data-discount")
            })
        },
        incrementQty: (e) => {
            dispatch({ type: "QTY_INCREMENT", elem: e.target.getAttribute("data-id") })
        },
        decrementQty: (e) => {
            dispatch({ type: "QTY_DECREMENT", elem: e.target.getAttribute("data-id") })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartWrapper);

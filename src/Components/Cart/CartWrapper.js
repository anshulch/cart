import React, {Component} from 'react';
import { connect } from 'react-redux';
import CartItem from './Cart';

class CartWrapper extends Component{
    render(){
        const items = this.props.selectedItems.map(item => {
            return(
            <CartItem key={item.id}
            itemDeleteHandler={this.props.deleteItem}
            prodName={item.name}
            prodId={item.id}
            prodPrice={item.price}
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
            dispatch({ type: "DELETE_ITEM", elem: e.target.getAttribute("data-id") })
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartWrapper);

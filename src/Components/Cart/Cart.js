import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRupeeSign } from '@fortawesome/free-solid-svg-icons';

const cart = (props) => {
    return(
        <div className="selected__item">
            {/* <img src="http://lorempixel.com/500/600/technics/" alt="img" /> */}
            <img src="https://fakeimg.pl/300/" alt="fake"/>
            <div className="item__details">
                <div>{props.prodName}</div>
                <div className="offers">
                <div>
                    <span><FontAwesomeIcon className="fa--white" icon={faRupeeSign} /> {Math.round(props.prodPrice - (props.prodPrice * props.discount / 100))}</span>
                    <span>{props.prodPrice}</span>
                </div>
                <div className="discount">{props.discount} % off</div>
            </div>
            <div className="item-qty">
                { props.qty > 1
                ?<span onClick={props.decrementHandler} data-id={props.prodId}>-</span>
                :<span className="diable__action">-</span>
                }
                <input value={props.qty} disabled/>
                <span onClick={props.incrementHandler} data-id={props.prodId}>+</span>
            </div>
            <div className="remove--item upper--case" onClick={props.itemDeleteHandler} data-id={props.prodId} data-qty={props.qty} data-price={props.prodPrice} data-discount={props.discount}>Remove</div>
            </div>
        </div>
    )
}

export default cart;
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
                    <span><FontAwesomeIcon className="fa--white" icon={faRupeeSign} /> {props.prodPrice}</span>
                    <span>{props.prodPrice * props.discount / 100}</span>
                </div>
                <div className="discount">{props.discount} % off</div>
            </div>
            <div className="item-qty">
                <span>-</span>
                <input value="1" disabled/>
                <span>+</span>
            </div>
            <div className="remove--item upper--case" onClick={props.itemDeleteHandler} data-id={props.prodId}>Remove</div>
            </div>
        </div>
    )
}

export default cart;
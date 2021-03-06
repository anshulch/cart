import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRupeeSign } from '@fortawesome/free-solid-svg-icons';

const product = (props) => {
    return(
        <div className="prod__Wrap">
            {/* <img src="http://lorempixel.com/500/600/technics/" alt="img" /> */}
            <img src={props.prodImg} alt="fake"/>
            <div>{props.prodName}</div>
            <div className="offers">
                <div>
                    <span><FontAwesomeIcon className="fa--white" icon={faRupeeSign} /> {Math.round(props.prodPrice - (props.prodPrice * props.discount / 100))}</span>
                    {
                    props.discount
                    ?<span>{props.prodPrice}</span>
                    :null
                    }
                </div>
                {
                    props.discount
                    ?<div className="discount">{props.discount}% off</div>
                    :<div className="discount">Best price</div>
                }
            </div>
            <button onClick={props.itemClickHandler} data-id={props.prodId}>Add to Cart</button>
        </div>
    )
}

export default product;
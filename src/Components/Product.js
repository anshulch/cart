import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRupeeSign } from '@fortawesome/free-solid-svg-icons';

const product = () => {
    return(
        <div>
            <img src="http://lorempixel.com/500/600/technics/" alt="img" />
            <div>Item 1</div>
            <div className="offers">
                <div>
                    <span><FontAwesomeIcon className="fa--white" icon={faRupeeSign} /> 319</span>
                    <span>900</span>
                </div>
                <div className="discount">64%</div>
            </div>
            <button>Add to Cart</button>
        </div>
    )
}

export default product;
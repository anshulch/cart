import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRupeeSign } from '@fortawesome/free-solid-svg-icons';

const PriceDetails = () =>{
    return(
        <section className="price__details border--wrap">
            <div className="item__name upper--case">Price details</div>
            <ul className="details--row">
                <li>Price (1 item)</li>
                <li><FontAwesomeIcon className="fa--white" icon={faRupeeSign} /> 900</li>
            </ul>
            <ul className="details--row">
                <li>Discount</li>
                <li><FontAwesomeIcon className="fa--white" icon={faRupeeSign} /> 900</li>
            </ul>
            <div className="total__payable details--row">
                <div className="upper--case">Total Payable</div>
                <div><FontAwesomeIcon className="fa--white" icon={faRupeeSign} /> 319</div>
            </div>
        </section>
    )
}

export default PriceDetails;
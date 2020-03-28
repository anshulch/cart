import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRupeeSign } from '@fortawesome/free-solid-svg-icons';

const PriceDetails = (props) =>{
    return(
        <section className="price__details border--wrap">
            <div className="item__name upper--case">Price details</div>
            <ul className="details--row">
                { (props.count > 1)
                ?<li>Price ({props.count} items)</li>
                :<li>Price ({props.count} item)</li>
                }
                <li><FontAwesomeIcon className="fa--white" icon={faRupeeSign} /> {props.total}</li>
            </ul>
            <ul className="details--row">
                <li>Discount</li>
                <li><FontAwesomeIcon className="fa--white" icon={faRupeeSign} /> {props.totalDiscount}</li>
            </ul>
            <div className="total__payable details--row">
                <div className="upper--case">Total Payable</div>
                <div><FontAwesomeIcon className="fa--white" icon={faRupeeSign} /> {props.total - props.totalDiscount}</div>
            </div>
        </section>
    )
}

export default PriceDetails;
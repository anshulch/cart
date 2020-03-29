import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const header = (props) => {
    return(
        <header>
            <Link to="/cart"><FontAwesomeIcon className="fa__star" icon={faStar} />{props.total}</Link>
            <aside>
                <div className="search__bar">
                    <FontAwesomeIcon className="fa--white" icon={faSearch} />
                    <input />
                </div>
                <Link to="/cart-items"><FontAwesomeIcon className="fa--white" icon={faShoppingCart} /></Link>
                <div className="counter">{props.count}</div>
            </aside>
        </header>
    )
}

export default header;
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const header = (props) => {
    return(
        <header>
            <Link to="/"><FontAwesomeIcon className="fa__star" icon={faStar} />{props.total}</Link>
            <aside>
                <FontAwesomeIcon className="fa--white" icon={faSearch} />
                <Link to="/cart"><FontAwesomeIcon className="fa--white" icon={faShoppingCart} /></Link>
                <div className="counter">{props.count}</div>
            </aside>
        </header>
    )
}

export default header;
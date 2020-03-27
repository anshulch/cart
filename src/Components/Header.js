import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const header = (props) => {
    return(
        <header>
            <FontAwesomeIcon className="fa__star" icon={faStar} />
            <aside>
                <FontAwesomeIcon className="fa--white" icon={faSearch} />
                <FontAwesomeIcon className="fa--white" icon={faShoppingCart} />
                <div className="counter">{props.count}</div>
            </aside>
        </header>
    )
}

export default header;
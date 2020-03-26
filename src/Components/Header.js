import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const header = () => {
    return(
        <header>
            <FontAwesomeIcon className="fa__star" icon={faStar} />
            <aside>
                <FontAwesomeIcon className="fa--white" icon={faSearch} />
                <FontAwesomeIcon className="fa--white" icon={faShoppingCart} />
            </aside>
        </header>
    )
}

export default header;
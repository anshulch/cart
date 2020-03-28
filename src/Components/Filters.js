import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faFilter } from '@fortawesome/free-solid-svg-icons';

const filter = () => {
    return(
        <ul className="filters">
            <li><FontAwesomeIcon className="display--none" icon={faSort} />Sort</li>
            <li><FontAwesomeIcon className="display--none" icon={faFilter} />Filter</li>
        </ul>
    )
}
export default filter;
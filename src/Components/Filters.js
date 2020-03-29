import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faFilter } from '@fortawesome/free-solid-svg-icons';

const filter = () => {
    return(
        <ul className="filters">
            <li>
                <FontAwesomeIcon className="display--none" icon={faSort} /><span className="font--bold">Sort</span>
                <span className="sort__by only--desk--display font--bold">By</span>
                <span className="price__filter active only--desk--display">Price -- High Low</span>
                <span className="price__filter only--desk--display">Price -- Low High</span>
                <span className="price__filter only--desk--display">Price -- Discount</span>
            </li>
            <li><FontAwesomeIcon className="display--none" icon={faFilter} /><span className="filter__label font--bold">Filter</span>
            <div className="filer__details text--center only--desk--display">
                <input className="slider" type="range" min="1" max="100" value="50" readOnly/>
                <div className="price--label">Price</div>
                <button className="btn__apply">Apply</button>
            </div>
            </li>
        </ul>
    )
}
export default filter;
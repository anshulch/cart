import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faFilter } from '@fortawesome/free-solid-svg-icons';

const filter = (props) => {
    return(
        <ul className="filters">
            <li>
                <FontAwesomeIcon className="display--none" icon={faSort} /><span className="font--bold">Sort</span>
                <span className="sort__by only--desk--display font--bold">By</span>
                <span onClick={props.highToLow} className="price__filter active only--desk--display">Price -- High Low</span>
                <span onClick={props.lowToHigh} className="price__filter only--desk--display">Price -- Low High</span>
                <span onClick={props.sortByDiscount} className="price__filter only--desk--display">Price -- Discount</span>
            </li>
            <li><FontAwesomeIcon className="display--none" icon={faFilter} /><span className="filter__label font--bold">Filter</span>
            {/* <div className="filer__details text--center only--desk--display"> */}
            <div className="filer__details text--center">
                <div class="price-field">
                    <input type="range"  min="100" max="500" defaultValue="100" id="lower" />
                    <input type="range" min="100" max="500" defaultValue="500" id="upper" />
                </div>
                <div className="price--label">Price</div>
                <button className="btn__apply">Apply</button>
            </div>
            </li>
        </ul>
    )
}
export default filter;
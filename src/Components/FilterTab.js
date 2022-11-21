import React from 'react'
import { FaBars,FaTh } from "react-icons/fa";

function FilterTab() {
    return (
        <div className="filter-tab">
            <div className="filter">
                <p className="items" style={{margin:'0 10px'}}>13 items</p>
                <div className="sort-items">

                    <label htmlFor="sort-by">Sort By</label>
                    <select name="sortBy" id="sort-by">
                        <option value="Name">Name</option>
                        <option value="low-high">Price: Low-High</option>
                        <option value="high-low">Price: High-Low</option>
                    </select>
                </div>
                <div className="item-count">
                    <label htmlFor="items-cnt">Show</label>
                    <select name="itemsCount" id="items-cnt">
                        <option value="6">6</option>
                        <option value="9">9</option>
                        <option value="12">12</option>
                        <option value="15">15</option>
                    </select>
                </div>

            </div>
            <div className="orientation">
                <FaTh style={{color:'#2678BF'}} />
                <FaBars />
            </div>
        </div>
    )
}

export default FilterTab
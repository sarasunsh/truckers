'use strict';

import React from 'react';
import { Button, ButtonGroup, DropdownButton, MenuItem } from 'react-bootstrap';



export default (props) => {
    const { filters, toggleFilter, priceFilter, cuisineFilter } = props;

    const cuisines = [
      'Mexican',
      'Italian',
      'Japanese',
      'Chinese',
      'Spanish',
      'Thai',
      'Vietnamese',
      'French',
      'Greek',
      'Lebanese'
    ];

    const prices = [5, 10, 15]
    console.log('filters', filters)

    return (
      <div className="filters">
        <div className="filter-buttons">
          <ul className="filters-vertical">
            <li><Button className="btn-responsive" className={filters['open_now'] ? "active" : ""} onClick={() => toggleFilter('open_now')}>Open Now</Button></li>
            <li><Button className="btn-responsive" className={filters['highRated'] ? "active" : ""} onClick={() => toggleFilter('highRated')}>Highest Rated</Button></li>
            <h4> Maximum Price </h4>
            {prices.map((price) => (
                <li  key={price}>
                    <Button
                        className="btn-responsive"
                        className={(filters['maxPrice'] && filters['maxPrice'] === price) ? "active" : ""}
                        onClick={() => priceFilter(price)}>${price}
                    </Button>
                </li>
                )
            )}
            <h4> Cuisines </h4>
            {cuisines.map((cuisine) => (
                <li key={cuisine}>
                    <Button
                        className="btn-responsive"
                        className={filters['cuisine'] === cuisine ? "active" : ""}
                        onClick={() => cuisineFilter(cuisine)}>{cuisine}
                    </Button>
                </li>
                )
            )}
          </ul>
        </div>
      </div>
    )
}

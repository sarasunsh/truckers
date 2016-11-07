'use strict';

import React from 'react';
import { Button, ButtonGroup, ButtonToolbar, SplitButton, MenuItem } from 'react-bootstrap';



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
                    <li>
                        <Button
                            className={filters['open_now'] ? "active" : ""}
                            onClick={() => toggleFilter('open_now')}>
                            Open Now
                        </Button>
                    </li>
                    <li>
                        <Button
                            className={filters['highRated'] ? "active" : ""}
                            onClick={() => toggleFilter('highRated')}>
                            Highest Rated
                        </Button>
                    </li>
                    <span> Budget </span>
                    <li>
                        <ButtonGroup>
                            {prices.map((price) => (
                                <Button
                                      key={price}
                                      className={(filters['maxPrice'] && filters['maxPrice'] === price) ? "active" : ""}
                                      onClick={() => priceFilter(price)}>
                                      ${price}
                                </Button>
                                )
                            )}
                          </ButtonGroup>
                    </li>
                    <li>
                        <SplitButton
                            title="Cuisine"
                            id="cuisine">
                            {cuisines.map((cuisine) => (
                                  <MenuItem
                                        key={cuisine}
                                        id={cuisine}
                                        className={filters['cuisine'] === cuisine ? "active" : ""}
                                        onSelect={() => cuisineFilter(cuisine)}>{cuisine}
                                  </MenuItem>
                                )
                            )}
                        </SplitButton>
                    </li>
              </ul>
          {/* Filters flip to top of screen at 989px */}
              <ButtonToolbar className="filters-horizontal">
                  <ButtonGroup>
                      <Button
                          className={filters['open_now'] ? "active" : ""}
                          onClick={() => toggleFilter('open_now')}>
                          Open Now
                      </Button>
                      <Button
                          className={filters['highRated'] ? "active" : ""}
                          onClick={() => toggleFilter('highRated')}>
                          Highest Rated
                      </Button>
                  </ButtonGroup>
                  <ButtonGroup>
                      {prices.map((price) => (
                            <Button
                                  key={price}
                                  className={(filters['maxPrice'] && filters['maxPrice'] === price) ? "active" : ""}
                                  onClick={() => priceFilter(price)}>${price}
                            </Button>
                          )
                      )}
                  </ButtonGroup>
                  <SplitButton
                      title="Cuisine"
                      id="cuisine">
                      {cuisines.map((cuisine) => (
                            <MenuItem
                                  key={cuisine}
                                  id={cuisine}
                                  className={filters['cuisine'] === cuisine ? "active" : ""}
                                  onSelect={() => cuisineFilter(cuisine)}>{cuisine}
                            </MenuItem>
                          )
                      )}
                  </SplitButton>
              </ButtonToolbar>
        </div>
      </div>
    )
}

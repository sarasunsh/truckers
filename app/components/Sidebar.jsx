'use strict';

import React from 'react';
import { Button, ButtonGroup, DropdownButton, MenuItem } from 'react-bootstrap';

/* -=-= REDUX =-=-

assume props passed in as follows:
 1. onHighRatedClick = (evt) => {
      // redux dispatch to change visibility to false for non-highRated
    }
 2. onOpenClick = (evt) => {
      // redux dispatch to change visibility to false for not open
    }
 3. onBudgetClick = (evt) => {
      if (evt.target.value === 5) {
        // redux dispatch to change visibility to false for >$5
      }
      else if (evt.target.value === 10) {
        // redux dispatch to change visibility to false for >$10
      }
      else if (evt.target.value === 15) {
       // redux dispatch to change visibility to false for >$15
      }
    }
  4. onCuisineClick = (evt) => {
      // redux dispatch to change visibility to false for non-cuisine type
    }
*/

/* -=-= CSS =-=-

.sidebar {
  background-color: LightGray;
  border: 1px;
  border-color: Orange;
  height: 100%;
  overflow: auto;
  position: fixed;
  top: 50px; // maybe?
  width: 250px
}

.filter-buttons {
  display: block;
  width: 50px;
}

.filter-buttons ul,
.filter-buttons li {
  list-style: none;
}

@media only and screen (max-width: 767px) {

  .sidebar {
    background-color: LightGray;
    display: block;
    height: 50px;
    margin-bottom: 10px;
    position: fixed;
    top: 50px // maybe?
    width: 100%;
  }

  .filter-buttons ul,
  .filter-buttons li {
    list-style: none;
  }

}

*/

export default (props) => {

    const { onHighRatedClick, onOpenClick, onBudgetClick, onCuisineClick } = props;

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

    return (
      <div className="sidebar">
        <div className="filter-buttons">
          <ul>
            <li><Button onClick={() => onOpenClick}>Open Now</Button></li>
            <li><ButtonGroup onClick={() => onBudgetClick}>
              <Button value="5">$5</Button>
              <Button value="10">$10</Button>
              <Button value="15">$15</Button>
            </ButtonGroup></li>
            <li><Button onClick={() => onHighRatedClick}>Highest Rated</Button></li>
            <li><DropdownButton title="Cuisine" onClick={() => onCuisineClick}>
              {cuisines.map((cuisine, idx) => {
                return (
                  <MenuItem key={idx} value={cuisine}> {cuisine} </MenuItem>
                )
              })}
            </DropdownButton></li>
          </ul>
        </div>
      </div>
    )
}

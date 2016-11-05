'use strict';

import React from 'react';
import { Button, ButtonGroup, DropdownButton, MenuItem } from 'react-bootstrap';

// This component provides the user interface (buttons) for filtering trucks
// on the main presentational component (TruckSearch) for the landing page.
// The container passes it all necessary click handlers to dispatch the
// selected truck filter.
export default (props) => {

    // declare click handlers from container-provided props
    const { onHighRatedClick, onOpenClick, onBudgetClick, onCuisineClick } = props;

    // available cuisines to filter
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

    // NOTE that these react-bootstrap buttons also have a special class
    // called 'btn-responsive' to phase the buttons to a smaller size for
    // smaller viewscreens and for when the filter sidebar collapses to a
    // horizontal bar underneath the navbar (that collapsed bar is coded
    // beneath the primary sidebar html)
    return (
      <div className="filters">
        <div className="filter-buttons">
          <ul className="filters-vertical">
            <li><Button className="btn-responsive" onClick={() => onOpenClick}>Open Now</Button></li>
            <li><ButtonGroup onClick={() => onBudgetClick}>
              <Button className="btn-responsive" value="5">$5</Button>
              <Button className="btn-responsive" value="10">$10</Button>
              <Button className="btn-responsive" value="15">$15</Button>
            </ButtonGroup></li>
            <li><Button className="btn-responsive" onClick={() => onHighRatedClick}>Highest Rated</Button></li>
            <li><DropdownButton className="btn-responsive" title="Cuisine" onClick={() => onCuisineClick}>
              {cuisines.map((cuisine, idx) => {
                return (
                  <MenuItem key={idx} value={cuisine}> {cuisine} </MenuItem>
                )
              })}
            </DropdownButton></li>
          </ul>
  {/* -=-=-= BEGIN COLLAPSED SIDEBAR CODE =-=-=-=-=- */}
          <div className="filters-horizontal">
            <Button className="btn-responsive" onClick={() => onOpenClick}>Open Now</Button>
            <ButtonGroup onClick={() => onBudgetClick}>
              <Button className="btn-responsive" value="5">$5</Button>
              <Button className="btn-responsive" value="10">$10</Button>
              <Button className="btn-responsive" value="15">$15</Button>
            </ButtonGroup>
            <Button className="btn-responsive" onClick={() => onHighRatedClick}>Highest Rated</Button>
            <DropdownButton className="btn-responsive" title="Cuisine" onClick={() => onCuisineClick}>
              {cuisines.map((cuisine, idx) => {
                return (
                  <MenuItem key={idx} value={cuisine}> {cuisine} </MenuItem>
                )
              })}
            </DropdownButton>
          </div>
        </div>
      </div>
    )
}

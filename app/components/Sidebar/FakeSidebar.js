'use strict';

import React from 'react';
import { Button, ButtonGroup, DropdownButton, MenuItem } from 'react-bootstrap';



export default (props) => {


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
            <div>Fake Sidebar</div>
    )
}


      // <div className="filters">
      //   <div className="filter-buttons">
      //     <ul className="filters-vertical">
      //       <li><Button className="btn-responsive" onClick={() => onOpenClick}>Open Now</Button></li>
      //       <li><ButtonGroup onClick={() => onBudgetClick}>
      //         <Button className="btn-responsive" value="5">$5</Button>
      //         <Button className="btn-responsive" value="10">$10</Button>
      //         <Button className="btn-responsive" value="15">$15</Button>
      //       </ButtonGroup></li>
      //       <li><Button className="btn-responsive" onClick={() => onHighRatedClick}>Highest Rated</Button></li>
      //       <li><DropdownButton className="btn-responsive" title="Cuisine" onClick={() => onCuisineClick}>
      //         {cuisines.map((cuisine, idx) => {
      //           return (
      //             <MenuItem key={idx} value={cuisine}> {cuisine} </MenuItem>
      //           )
      //         })}
      //       </DropdownButton></li>
      //     </ul>
      //     <div className="filters-horizontal">
      //       <Button className="btn-responsive" onClick={() => onOpenClick}>Open Now</Button>
      //       <ButtonGroup onClick={() => onBudgetClick}>
      //         <Button className="btn-responsive" value="5">$5</Button>
      //         <Button className="btn-responsive" value="10">$10</Button>
      //         <Button className="btn-responsive" value="15">$15</Button>
      //       </ButtonGroup>
      //       <Button className="btn-responsive" onClick={() => onHighRatedClick}>Highest Rated</Button>
      //       <DropdownButton className="btn-responsive" title="Cuisine" onClick={() => onCuisineClick}>
      //         {cuisines.map((cuisine, idx) => {
      //           return (
      //             <MenuItem key={idx} value={cuisine}> {cuisine} </MenuItem>
      //           )
      //         })}
      //       </DropdownButton>
      //     </div>
      //   </div>
      // </div>

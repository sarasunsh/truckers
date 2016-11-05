'use strict';

import React, { Component } from 'react';

// import our sub-components
import OurNav from './OurNav';
import Sidebar from './Sidebar';
import TruckSearch from './TruckSearch';

// Primary Presentational Container Component for our Landing Page
export default class AllTrucks extends Component {

    // props is the entire store via Provider
    constructor (props) {
      super(props);
      this.props = props;  // add props to the class
      // bind our class methods, i.e., click handlers
      this.onOpenClick = this.onOpenClick.bind(this);
      this.onHighRatedClick = this.onHighRatedClick.bind(this);
      this.onBudgetClick = this.onBudgetClick.bind(this);
      this.onCuisineClick = this.onCuisineClick.bind(this);
    }

    /*
      FILTERS => ['open', 'highRated', '5', '10', '15', {cuisine}]
      {cuisine} => ['Mexican', 'Italian', 'Japanese', 'Chinese',
                    'Spanish', 'Thai', 'Vietnamese', 'French',
                    'Greek', 'Lebanese']
    */

    // handle click to filter for 'open' trucks
    onOpenClick = (evt) => {
      if (this.props.filters.includes('open')) {  // if already clicked
        dispatch(removeFilter('open'));           // remove filter
        dispatch(showFilteredTrucks());           // re-map trucks to show
      } else {
        dispatch(addFilter('open'));              // otherwise, add filter
        dispatch(showFilteredTrucks());           // re-map trucks to show
      }
    }

    // handle click to filter for 'highRated' trucks
    onHighRatedClick = (evt) => {
      if (this.props.filters.includes('highRated')) {   // ^^^see above^^^
          dispatch(removeFilter('highRated'));
          dispatch(showFilteredTrucks());
      } else {
        dispatch(addFilter('highRated'));
        dispatch(showFilteredTrucks());
      }
    }

// NOTE the following click handlers rely on information passed with
// the click event from the button as 'value' => evt.target.value 

    // handle click to filter by budget => $5, $10, $15
    onBudgetClick = (evt) => {
      if (evt.target.value === '5') {
        if (this.props.filters.includes('5')) {    //^^^^^see above^^^^^^^
          dispatch(removeFilter('5'));
          dispatch(showFilteredTrucks());
        } else {
          dispatch(addFilter('5'));
          dispatch(showFilteredTrucks());
        }
      }
      else if (evt.target.value === '10') {
        if (this.props.filters.includes('10')) {
          dispatch(removeFilter('10'));
          dispatch(showFilteredTrucks());
        } else {
          dispatch(addFilter('10'));
          dispatch(showFilteredTrucks());
        }
      }
      else if (evt.target.value === '15') {
        if (this.props.filters.includes('15')) {
          dispatch(removeFilter('15'));
          dispatch(showFilteredTrucks());
        } else {
          dispatch(addFilter('15'));
          dispatch(showFilteredTrucks());
        }
      }
    }

    // handle click to filter by cuisine (one at a time)
    onCuisineClick = (evt) => {
        const cuisine = evt.target.value
      if (this.props.filters.includes(cuisine)) {  // ^^^^^see above^^^^^^
        dispatch(removeFilter(cuisine));
        dispatch(showFilteredTrucks());
      } else {
        dispatch(addFilter(cuisine));
        dispatch(showFilteredTrucks());
      }
    }

    // render Navigation Bar (OurNav), Sidebar, and Display of Trucks (Truck Search)
    // click handlers passed in to Sidebar
    // store passed in to TruckSearch as props
    render() {
      <OurNav />
      <Sidebar
        onHighRatedClick={() => this.onHighRatedClick}
        onOpenClick={() => this.onOpenClick}
        onBudgetClick={() => this.onBudgetClick}
        onCuisineClick={() => this.onCuisineClick}
      />
      <TruckSearch props={this.props} />
    }

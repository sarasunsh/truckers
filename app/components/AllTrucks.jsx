'use strict';

import React, { Component } from 'react';

// import Sidebar from './Sidebar';
import OurNav from './OurNav';
import Sidebar from './Sidebar';
import TruckSearch from './TruckSearch';

export default class AllTrucks extends Component {

    constructor (props) {
      super(props);
      this.props = props;

      this.onOpenClick = this.onOpenClick.bind(this);
      this.onHighRatedClick = this.onHighRatedClick.bind(this);
      this.onBudgetClick = this.onBudgetClick.bind(this);
      this.onCuisineClick = this.onCuisineClick.bind(this);
    }

    onOpenClick = (evt) => {
      if (this.props.filters.includes("open")) {
        // show all trucks again
        // call redux action to re-map the trucks array and show AllTrucks
        // call redux action to remove open filter from state
        dispatch(removeFilter("open"));
        dispatch(showFilteredTrucks());
      } else {
        // show only open trucks
        // call redux action to map the trucks array and show only open trucks
        // call redux action to add open to filter array on state
        dispatch(addFilter("open"));
        dispatch(showFilteredTrucks());
      }
    }

    onHighRatedClick = (evt) => {
      if (this.props.filters.includes("highRated")) {
          dispatch(removeFilter("highRated"));
          dispatch(showFilteredTrucks());
        // show all trucks again
        // call redux action to re-map the trucks array and show AllTrucks
        // call redux action to remove ratings filter from state
      } else {
        // show only open trucks
        // call redux action to map the trucks array and show only high rated trucks
        // call redux action to add ratings to filter array on state
        dispatch(addFilter("highRated"));
        dispatch(showFilteredTrucks());
      }
    }

    onBudgetClick = (evt) => {
      if (evt.target.value === "5") {
        if (this.props.filters.includes("5")) {
          // show all trucks again
          // call redux action to re-map the trucks array and show AllTrucks
          // call redux action to remove $5 filter from state
          dispatch(removeFilter("5"));
          dispatch(showFilteredTrucks());
        } else {
          // show only open trucks
          // call redux action to map the trucks array and show only $5 trucks
          // call redux action to add $5 to filter array on state
          dispatch(addFilter("5"));
          dispatch(showFilteredTrucks());
        }
      }
      else if (evt.target.value === "10") {
        if (this.props.filters.includes("10")) {
          // show all trucks again
          // call redux action to re-map the trucks array and show AllTrucks
          // call redux action to remove $10 filter from state
          dispatch(removeFilter("10"));
          dispatch(showFilteredTrucks());
        } else {
          // show only open trucks
          // call redux action to map the trucks array and show only $10 trucks
          // call redux action to add $10 to filter array on state
          dispatch(addFilter("10"));
          dispatch(showFilteredTrucks());
        }
      }
      else if (evt.target.value === "15") {
        if (this.props.filters.includes("15")) {
          // show all trucks again
          // call redux action to re-map the trucks array and show AllTrucks
          // call redux action to remove $15 filter from state
          dispatch(removeFilter("15"));
          dispatch(showFilteredTrucks());
        } else {
          // show only open trucks
          // call redux action to map the trucks array and show only $15 trucks
          // call redux action to add $15 to filter array on state
          dispatch(addFilter("15"));
          dispatch(showFilteredTrucks());
        }
      }
    }

    onCuisineClick = (evt) => {
        const cuisine = evt.target.value
      if (this.props.filters.includes(cuisine)) {
        // show all trucks again
        // call redux action to re-map the trucks array and show AllTrucks
        // call redux action to remove cuisine filter from state
        dispatch(removeFilter(cuisine));
        dispatch(showFilteredTrucks());
      } else {
        // show only open trucks
        // call redux action to map the trucks array and show only specified cuisine trucks
        // call redux action to add cuisine to filter array on state
        dispatch(addFilter(cuisine));
        dispatch(showFilteredTrucks());
      }
    }

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

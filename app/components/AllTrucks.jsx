'use strict';

import React, { Component } from 'react';

// import Sidebar from './Sidebar';
import OurNav from './OurNav';
import Sidebar from './Sidebar';
import TruckSearch from './TruckSearch';
import store from './reducers/store'

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
      if (this.props.filters.includes(evt.target.value)) {
        // show all trucks again
        // call redux action to re-map the trucks array and show AllTrucks
        // call redux action to remove open filter from state
      } else {
        // show only open trucks
        // call redux action to map the trucks array and show only open trucks
        // call redux action to add open to filter array on state
      }
    }

    onHighRatedClick = (evt) => {
      if (this.props.filters.includes(evt.target.value)) {
        // show all trucks again
        // call redux action to re-map the trucks array and show AllTrucks
        // call redux action to remove ratings filter from state
      } else {
        // show only open trucks
        // call redux action to map the trucks array and show only high rated trucks
        // call redux action to add ratings to filter array on state
      }
    }

    onBudgetClick = (evt) => {
      if (evt.target.value === 5) {
        if (this.props.filters.includes(evt.target.value)) {
          // show all trucks again
          // call redux action to re-map the trucks array and show AllTrucks
          // call redux action to remove $5 filter from state
        } else {
          // show only open trucks
          // call redux action to map the trucks array and show only $5 trucks
          // call redux action to add $5 to filter array on state
        }
      }
      else if (evt.target.value === 10) {
        if (this.props.filters.includes(evt.target.value)) {
          // show all trucks again
          // call redux action to re-map the trucks array and show AllTrucks
          // call redux action to remove $10 filter from state
        } else {
          // show only open trucks
          // call redux action to map the trucks array and show only $10 trucks
          // call redux action to add $10 to filter array on state
        }
      }
      else if (evt.target.value === 15) {
        if (this.props.filters.includes(evt.target.value)) {
          // show all trucks again
          // call redux action to re-map the trucks array and show AllTrucks
          // call redux action to remove $15 filter from state
        } else {
          // show only open trucks
          // call redux action to map the trucks array and show only $15 trucks
          // call redux action to add $15 to filter array on state
        }
      }
    }

    onCuisineClick = (evt) => {
      if (this.props.filters.includes(evt.target.value)) {
        // show all trucks again
        // call redux action to re-map the trucks array and show AllTrucks
        // call redux action to remove cuisine filter from state
      } else {
        // show only open trucks
        // call redux action to map the trucks array and show only specified cuisine trucks
        // call redux action to add cuisine to filter array on state
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

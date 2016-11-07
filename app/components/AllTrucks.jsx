'use strict';

import React, { Component } from 'react';

// import our sub-components
import FakeSidebarContainer from './Sidebar/FakeSidebarContainer';
import TruckSearchContainer from './TruckSearch/TruckSearchContainer';

// Primary Presentational Container Component for our Landing Page
export default class AllTrucks extends Component {

    // render Sidebar and Display of Trucks (Truck Search)
    render() {
      return (
          <div id="main" className="container-fluid">
            <div className="col-md-2 col-sm-12 col-xs-12">
                <FakeSidebarContainer />
            </div>
            <div className="col-md-10 col-sm-12 col-xs-12">
                <TruckSearchContainer />
            </div>
          </div>
      )

    }
}

'use strict';

import React, { Component } from 'react';

// import SidebarContainer from '../Sidebar/SidebarContainer';
// import TruckSearchContainer from '../TruckSearchContainer';
import FakeSidebar from './Sidebar/FakeSidebar';
import TruckSearch from './TruckSearch/TruckSearch';


export default class MainPage extends Component {

    render () {

        return (
          <div id="main" className="container-fluid">
            <div className="col-xs-2">
                <FakeSidebar />
            </div>
            <div className="col-xs-10">
                <TruckSearch />
            </div>
          </div>
        );
    }
}

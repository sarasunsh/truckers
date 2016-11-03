'use strict';

import React, { Component } from 'react';

import Sidebar from './Sidebar';
import OurNav from './OurNav';


export default class App extends Component {

    constructor (props) {
        super(props);
    }

    // componentDidMount () {
    //     const { onLoad } = this.props;

    //     Promise.all([
    //         fetch('/api/albums').then(res => res.json()),
    //         fetch('/api/artists').then(res => res.json())
    //     ])
    //     .then(results => onLoad(...results));
    // }

    render () {

        return (
          <div id="main" className="container-fluid">
          <OurNav />
            <div className="row">
                <div className="col-xs-2">
                  <Sidebar />
                </div>
                <div className="col-xs-10">
                    Food Trucks coming!
                </div>
            </div>
            <button type="button" className="btn btn-success">Test</button>
          </div>
        );
    }
}

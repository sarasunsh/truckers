'use strict';

import React, { Component } from 'react';

import OurNav from '../OurNav';

export default class App extends Component {
    render () {

        return (
          <div id="main" className="container-fluid">
            <OurNav />
            <div className="row">
                {this.props.children}
            </div>
          </div>
        );
    }
}

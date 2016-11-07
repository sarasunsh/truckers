'use strict';

import React, { Component } from 'react';

import OurNav from '../OurNav';

const padding = {
    padding: '30px'
}

export default class App extends Component {
    render () {

        return (
          <div id="main" className="">
            <OurNav />
            <div className="row" style={padding}>
                {this.props.children}
            </div>
          </div>
        );
    }
}

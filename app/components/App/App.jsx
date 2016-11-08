'use strict';

import React, { Component } from 'react';
import OurNav from '../OurNav';

const padding = {
    padding: '30px'
}

export default class App extends Component {

    render () {
      // pass the user data from the 'auth' property of the state/store, as
      // well as a click handler to manage logouts 
      const { auth, logoutHandler } = this.props;

        return (
            <div id="main">
                <OurNav user={ auth } logoutHandler={ logoutHandler } />
                <div className="row" style={ padding }>
                    { this.props.children }
                </div>
            </div>
        )
    }
}

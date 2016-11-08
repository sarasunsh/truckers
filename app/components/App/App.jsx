'use strict';

import React, { Component } from 'react';
import OurNav from '../OurNav';

const padding = {
    padding: '30px'
}

export default class App extends Component {

    render () {

      const { auth } = this.props;

        return (
            <div id="main">
                <OurNav user={ auth } />
                <div className="row" style={ padding }>
                    { this.props.children }
                </div>
            </div>
        )
    }
}

'use strict';

import React from 'react';

export default class App extends React.Component {
    render () {

        return (
          <sidebar>
            <img
              src="http://cdn.mysitemyway.com/icons-watermarks/simple-black/iconathon/iconathon_food-truck/iconathon_food-truck_simple-black_512x512.png"
              className="logo" />
            <section>
              <h4>
                <a href="#">FILTER 1</a>
              </h4>
            </section>
            <section>
              <h4>
                <a href="#" >FILTER 2</a>
              </h4>
            </section>
          </sidebar>
        )
    }
}

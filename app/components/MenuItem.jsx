import React, { Component } from 'react';
import { Panel, ListGroup, ListGroupItem, Well, Button, Glyphicon } from 'react-bootstrap';
import MenuItem from './MenuItem'

const dummyMenuItem = {
    name: "Tacos al Pastor",
    description: "The tastiest tacos you've ever had in your life. Guac is totally extra $$$ tho...",
    price: "$8.00"
}


export default class OurNav extends Component {
  constructor() {
    super()
    this.state = {};
  }


  render() {

      const cssBrandOrange = {
          color: '#FFA500'
      };


    return (
        <div>
            <Well className="clearfix">
              <row>
                <row>
                    <div className="col-xs-4">
                        <h4 style={cssBrandOrange}>Tacos al Pastor</h4>
                        <h5>Description Content</h5>
                    </div>
                </row>
                <div className="col-xs-8">
                  <row>
                    <div className="col-xs-10">
                      <h5>Price Content</h5>
                    </div>
                  </row>
                </div>
              </row>
            </Well>

        </div>
    )
  }
}

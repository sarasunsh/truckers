import React, { Component } from 'react';
import { Panel, ListGroup, ListGroupItem } from 'react-bootstrap';
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

    return (
        <div>
            <h2>Our Delicious Menu (menu header)</h2>
            <Panel collapsible defaultExpanded header="APPETIZERS (Menu Section Heading)">
              Some default panel content here. (maybe copy about how delicious the appetizers are...)
              <ListGroup fill>
                <ListGroupItem>
                    <MenuItem />
                </ListGroupItem>
              </ListGroup>
            </Panel>
        </div>
    )
  }
}

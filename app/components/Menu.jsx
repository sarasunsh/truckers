import React, { Component } from 'react';
import { Panel, ListGroup, ListGroupItem } from 'react-bootstrap';
import MenuItem from './MenuItem'

const dummyMenuItem = {
    name: "Tacos al Pastor",
    description: "The tastiest tacos you've ever had in your life. Guac is totally extra $$$ tho...",
    price: "$8.00"
}


export default class Menu extends Component {

  render() {
    console.log(this.props.menu)
    return (
        <div>
            <h2>Menu</h2>
            <Panel collapsible defaultExpanded header="APPETIZERS (Menu Section Heading)">
              Some default panel content here.
              <ListGroup fill>
                {this.props.menu.map(item => (
                    <ListGroupItem>
                        <MenuItem item={item}/>
                    </ListGroupItem>
                  )

                )}


              </ListGroup>
            </Panel>
        </div>
    )
  }
}

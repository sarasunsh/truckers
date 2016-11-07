import React, { Component } from 'react';
import { Panel, ListGroup, ListGroupItem } from 'react-bootstrap';
import MenuItem from './MenuItem'



export default class Menu extends Component {

  render() {
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

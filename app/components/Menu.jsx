import React, { Component } from 'react';
import { Panel, ListGroup, ListGroupItem } from 'react-bootstrap';
import MenuItem from './MenuItem';



export default class Menu extends Component {
    
    constructor(props){
        super(props);
        this.handleAddItem = this.handleAddItem.bind(this);
    }
    
    handleAddItem(orderItem){
        this.props.addItem(orderItem);
    }

    render() {
        return (
            <div>
                <h2>Menu</h2>
                <Panel collapsible defaultExpanded header="APPETIZERS (Menu Section Heading)">
                    {this.props.menu.map(item => (
                        <MenuItem key={item.id} item={item} handleAddItem={this.handleAddItem}/>
                        )
                    )}
                </Panel>
            </div>
        )
    }
}

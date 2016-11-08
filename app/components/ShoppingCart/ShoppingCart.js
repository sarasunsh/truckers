'use strict';

import React, {Component} from 'react';
import { Panel, Table, Button, Glyphicon } from 'react-bootstrap';

const fullLengthStyling = {
    'height': '100%'
}

// we have access to currentOrders, [{menuItem: {name, price, description}, quantity}, {menuItem, quantity}, {menuItem, quantity}]

export default class ShoppingCart extends Component {

    constructor(props){
        super(props);
        this.handleRemoveItem = this.handleRemoveItem.bind(this);
        this.handleAddItem = this.handleAddItem.bind(this);
    }

    handleRemoveItem(orderItem){
        console.log("removing")
        console.log(orderItem)
        this.props.removeItem(orderItem)
    }

    handleAddItem(orderItem){
        this.props.addItem(orderItem)
    }

    submitOrderToServer(){
        let orderObject = {
            // userID: this.props.userID,

        }

        this.props.submitOrderToServer(orderObject);
    }

    render() {
        return (
            <Panel header="Shopping Cart" style={fullLengthStyling}>
                <Table responsive>
                    <tbody>
                        {
                            this.props.currentOrders.items && this.props.currentOrders.items.map(orderItem=>{
                                return(
                                    <tr key={orderItem.menuItem.id}>
                                        <td>
                                            <Glyphicon glyph="minus-sign" onClick={()=>this.handleRemoveItem(orderItem.menuItem)}/>
                                                {orderItem.quantity}
                                            <Glyphicon glyph="plus-sign" onClick={()=>this.handleAddItem(orderItem.menuItem)}/>
                                        </td>
                                        <td>
                                            {orderItem.menuItem.name}
                                        </td>
                                        <td>
                                            {`$${(orderItem.menuItem.price * orderItem.quantity).toFixed(2)}`}
                                        </td>
                                    </tr>
                                )
                            })
                        }

                        <tr>
                            <td>Item Subtotal</td>
                            <td>
                                {
                                    `$${this.props.currentOrders.items.reduce((prev, curr)=>{
                                        const rowCost = parseFloat(curr.menuItem.price) * curr.quantity;
                                        return prev + rowCost;
                                    }, 0.00).toFixed(2)}`
                                }
                            </td>
                        </tr>
                    </tbody>

                </Table>

                <Button bsStyle="success">Proceed to Checkout for $
                {
                    `${this.props.currentOrders.items.reduce((prev, curr)=>{
                        const rowCost = parseFloat(curr.menuItem.price) * curr.quantity;
                        return prev + rowCost;
                    }, 0.00).toFixed(2)}`
                }
                </Button>             

            </Panel>

        )
    }
}

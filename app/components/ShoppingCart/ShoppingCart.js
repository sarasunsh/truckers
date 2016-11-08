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
            userID: this.props.user.id,
            foodTruckID: this.props.foodTruck.id,
            completed: false,
            items: this.props.currentOrders.items

        }

        this.props.submitOrderToServer(orderObject);
    }

    render() {

        const quantityButton = {
            opacity:'0.3',
            fontSize:'0.7em',
        }

        return (
            <Panel header="Shopping Cart" style={fullLengthStyling}>
                <Table responsive>
                    <tbody>
                        {
                            this.props.currentOrders.items && this.props.currentOrders.items.map(orderItem=>{
                                return(
                                    <tr key={orderItem.menuItem.id}>
                                        <td>
                                            <span style={quantityButton}>
                                                <Glyphicon glyph="minus-sign" onClick={()=>this.handleRemoveItem(orderItem.menuItem)}/>
                                            </span>
                                            <span style={{padding:'5px'}}>
                                                {orderItem.quantity}
                                            </span>
                                            <span style={quantityButton}>
                                                <Glyphicon glyph="plus-sign" onClick={()=>this.handleAddItem(orderItem.menuItem)}/>
                                            </span>
                                            <span style={{paddingLeft:'10px'}}>
                                                {orderItem.menuItem.name}
                                            </span>
                                        </td>
                                        <td style={{textAlign:'right'}}>
                                            {`$${(orderItem.menuItem.price * orderItem.quantity).toFixed(2)}`}
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        <br/>
                        <tr>
                            <td>Item Subtotal</td>
                            <td style={{textAlign:'right'}}>
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

                <Button onClick={()=>this.submitOrderToServer()} bsStyle="success" block>Proceed to Checkout</Button>             

            </Panel>

        )
    }
}

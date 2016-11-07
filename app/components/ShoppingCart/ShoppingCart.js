'use strict';

import React from 'react';
import { Panel, Table, Button, Glyphicon } from 'react-bootstrap';

const fullLengthStyling = {
    'height': '100%'
}

// we have access to currentOrders, [{menuItem, quantity}, {menuItem, quantity}, {menuItem, quantity}]

export default (props) => {

    

    function handleRemoveItem(orderItem){
        this.props.removeItem(orderItem)
    }

    function handleAddItem(orderItem){
        this.props.addItem(orderItem)
    }


    return (
        <Panel header="Shopping Cart" style={fullLengthStyling}>
            <Table responsive>
                {
                    props.currentOrders.map(orderItem=>{
                        return(
                            <tr>
                                <td>
                                    <Glyphicon glyph="minus-sign" onClick={handleRemoveItem(orderItem.menuItem)}/>
                                        {orderItem.quantity}
                                    <Glyphicon glyph="plus-sign" onClick={handleAddItem(orderItem.menuItem)}/>
                                </td>
                                <td>
                                    {orderItem.menuItem.name}
                                </td>
                                <td>
                                    {`$${orderItem.menuItem.price * orderItem.quantity}`}
                                </td>
                            </tr>
                        )
                    })
                }


                <tr>
                    <td>Item Subtotal</td>
                    <td>
                        {
                            `$${props.currentOrders.reduce((prev, curr)=>{
                                const rowCost = curr.menuItem.price * curr.quantity;
                                return prev + rowCost;
                            }, 0)}`
                        }
                    </td>
                </tr>

                <Button>Proceed to Checkout</Button>





            </Table>




        </Panel>

    )
}

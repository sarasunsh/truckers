'use strict';

import React from 'react';
import { Button, Panel, ListGroupItem } from 'react-bootstrap';

export default (props) => {
    const {} = props;

    return (
    	 <Panel id="orders_panel" header="Past Orders">
            {props.orders.map(order => (
                    <ListGroupItem key={order.id}>
                        <h4>{order.id}</h4>
                        {order.menuItems.map(item =>(
                                <h5>{item.name}</h5>
                            )
                        )}
                    </ListGroupItem>
                )
            )}
		   </Panel>
    )

}

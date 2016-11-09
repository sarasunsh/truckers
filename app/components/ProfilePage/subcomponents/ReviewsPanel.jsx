'use strict';

import React from 'react';
import { Button, Panel, ListGroupItem } from 'react-bootstrap';

export default (props) => {
    const {user} = props;

    return(
    	<Panel id="reviews_panel" header="Your Reviews">
			{props.reviews.map(review => (
                    <ListGroupItem key={review.id}>
                        <h4>{review.rating}</h4>
                        {review.content}
                    </ListGroupItem>
                )
            )}
		</Panel>
    )

}


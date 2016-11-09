import React, { Component } from 'react';
import { Panel, ListGroup, ListGroupItem } from 'react-bootstrap';

export default class ReviewList extends Component {


    render() {
        return (
            <div>
                <Panel collapsible defaultExpanded header="Reviews">
                    {this.props.reviews.map(review => (
                        <ListGroupItem key={review.id} item={review}>{review.content}
                        </ListGroupItem>
                        )
                    )}
                </Panel>
            </div>
        )
    }
}

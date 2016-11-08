import React, { Component } from 'react';
import { Panel, ListGroup, ListGroupItem, Well, Button, Glyphicon, Row, Col } from 'react-bootstrap';


export default class MenuItem extends Component {
    render() {

        const cssBrandOrange = {
            color: '#FFA500'
        };

        const {item, handleAddItem} = this.props;

        return (
                <Col xs={12} md={6} className="clearfix">
                    <Well className="clearfix">
                        <Col xs={8}>
                            <h4 style={cssBrandOrange}>{item.name}</h4>
                            <h5>{item.description}</h5>
                        </Col>
                        <Col xs={4}>
                            <span>{`$${item.price.toFixed(2)}`}</span>
                            <Button className="pull-right" onClick={()=>handleAddItem(item)}><Glyphicon glyph="plus" /></Button>
                        </Col>
                    </Well>
                </Col>
        )
    }
}

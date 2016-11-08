import React, { Component } from 'react';
import TruckDescription from './TruckDescription';
import ShoppingCartContainer from '../ShoppingCart/ShoppingCartContainer';
import MenuContainer from '../MenuContainer';
import ReviewFormContainer from './ReviewFormContainer';
import ReviewList from './ReviewList';
import {Row, Col} from 'react-bootstrap';


export default class SingleTruck extends Component {
    render() {
        return (
            <Row>
                <Col xs={9}>
                    <TruckDescription truck={this.props.truck}/>
                    <MenuContainer menu={this.props.truck.menu}/>
                    <ReviewFormContainer truck={this.props.truck}/>
                    <ReviewList reviews={this.props.truck.reviews}/>
                 </Col>
                <Col xs={3}>
                    <ShoppingCartContainer />
                </Col>
            </Row>
        )
    }
}


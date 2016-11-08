'use strict';
import React, {Component} from 'react';
import {Col, Row, Well} from 'react-bootstrap';
import ProfilePanel from './subcomponents/ProfilePanel';
import PaymentPanel from './subcomponents/PaymentPanel';
import ReviewsPanel from './subcomponents/ReviewsPanel';
import OrdersPanel from './subcomponents/OrdersPanel';

export default class ProfilePage extends Component {

	constructor(props){
		super(props);
	}

	render(){

		return(
			<div id="profile_page">
				<Row>
					<Col sm={4}>
						{console.log(this.props)}
						<ProfilePanel />
						<PaymentPanel />
					</Col>

					<Col sm={4}>
						<ReviewsPanel />
					</Col>

					<Col sm={4}>
						<OrdersPanel />
					</Col>
				</Row>				
			</div>
		)
	}

}


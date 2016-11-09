'use strict';
import React, {Component} from 'react';
import {Col, Row, Well} from 'react-bootstrap';
import ProfilePanel from './subcomponents/ProfilePanel';
import PaymentPanel from './subcomponents/PaymentPanel';
import ReviewsPanel from './subcomponents/ReviewsPanel';
import OrdersPanel from './subcomponents/OrdersPanel';
import axios from 'axios';

export default class ProfilePage extends Component {

	constructor(props){
		super(props);
	}

	render(){

		const {user} = this.props;
	    if (user) {
	    	return(
				<div id="profile_page">
					<Row>
						<Col sm={4}>
							<ProfilePanel user={user}/>
							<PaymentPanel />
						</Col>

						<Col sm={4}>
							<ReviewsPanel reviews={user.reviews}/>
						</Col>

						<Col sm={4}>
							<OrdersPanel orders={user.orders}/>
						</Col>
					</Row>
				</div>
			)
	    } else {
	    	return (
	    		<h4>Go away</h4>
	    	)
	    }

	}

}


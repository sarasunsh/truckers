'use strict';

import { connect } from 'react-redux';
import ShoppingCart from './ShoppingCart'

// assume that state has properties:
// 1. store.currentTruck.menu = [{id, name, description, price}, {...}]
// 2. store.currentOrders = [{menuItem, quantity}, {menuItem, quantity}, {menuItem, quantity}]

const mapStateToProps = state => ({
	currentOrders
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapStateToProps)(ShoppingCart);
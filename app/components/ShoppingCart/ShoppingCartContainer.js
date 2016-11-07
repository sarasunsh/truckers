'use strict';

import { connect } from 'react-redux';
import ShoppingCart from './ShoppingCart';
import {addItem, removeItem, clearCart, assignFoodTruckID} from '../../reducers/shoppingCartReducer';

// assume that state has properties:
// 1. store.currentTruck.menu = [{id, name, description, price}, {...}]
// 2. store.currentOrders = [{menuItem, quantity}, {menuItem, quantity}, {menuItem, quantity}]

const mapStateToProps = state => ({
	currentOrders: state.shoppingCart
});

const mapDispatchToProps = dispatch => ({
	addItem: function(item){
		dispatch(addItem(item));
	},
	removeItem: function(item){
		dispatch(removeItem(item));
	},
	clearCart: function(){
		dispatch(clearCart());
	},
	assignFoodTruckID: function(id){
		dispatch(assignFoodTruckID(id));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);

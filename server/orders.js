'use strict'
// INTRODUCTION
// This file specifies CRUD routes for order records
	//
	// Order: {
	// 		quantity: integer
	// 		completed: boolean
	// }
	//
// ASSOCIATIONS
	//
	// Order.belongsTo(User);
	// Order.belongsTo(Truck);
	// Order.belongsToMany(MenuItem), {through: OrderItem});

const db = require('APP/db');
const { Order, MenuItem, OrderItem, User, FoodTruck } = require('../db/models');
const customOrderRoutes = require('express').Router();
const Promise = require('sequelize').Promise; // sequelize comes with Bluebird

// CREATE (POST)
	// a post request should contain and Object with:
	// - userId, who is this order from?
	// - foodTruckId, who is this order for?
	// - MenuItemId, what does this order contain?
	// - Orders (Array), what items did this person order?

	// Example:
	// {
	// 	userId: 123,
	// 	completed: false,
	// 	foodTruckId: 234,
	// 	orders: [
	// 		{menuItem: {}, quantity: 2},
	// 		{menuItem: {}, quantity: 1},
	// 		{menuItem: {}, quantity: 1},
	// 		{menuItem: {}, quantity: 1},
	// 	]
	// }

customOrderRoutes.post('/', (req, res, next)=>{
	const userId = req.body.userID; // userId: 123
	const foodTruckId = req.body.foodTruckID; // foodTruckId: 234
	const orders = req.body.items; // orders: { menuItem, quantity }

	// sanity check: none of these three things can be missing
	// if !(userId && foodTruckId && orders){
	// 	return res.status(500).send("Please provide a complete order object");
	// }

	// if everything is present start creating order rows!
	const orderPromises = orders.map(order=>{
		return Order.create({
			// create a new order
			completed: false,
			userId: userId
		}).then(newOrder=>{
			// define each new order's associations
			const orderPromise = newOrder.setUser(userId);
			const truckPromise = newOrder.setFoodTruck(foodTruckId);
			const menuItemPromise = newOrder.addMenuItem(order.menuItem.id, {quantity: order.quantity});
				// ^ association table with {quantity} as an extra attribute

			return Promise.all([orderPromise, truckPromise, menuItemPromise]);
		})
	})

	Promise.all(orderPromises)
	.then(createdOrders=>{
		console.log("Created orders")
		res.sendStatus(200);
	})
})

// READ

// Get ALL orders
customOrderRoutes.get('/', (req, res, next)=>{
	Order.findAll()
	.then(allOrders=>{
		res.json(allOrders);
	})
})

// Get all info on a specific order
customOrderRoutes.get('/:orderId', (req, res, next)=>{
	const orderId = req.params.orderId;

	Order.findOne({
		where: { id: orderId },
		include: [{ model: MenuItem }]
	})
	.then(specificOrder=>{
		res.json(specificOrder);
	})
})

// User should be able to get all of her orders, past and present
customOrderRoutes.get('/user/:userId', (req, res, next)=>{
	const userId = req.params.userId;

	Order.findAll({
		where: { user_id: userId },
		include: [{ model: MenuItem }]
	})
	.then(allOrdersFromThisUser=>{
		res.json(allOrdersFromThisUser);
	})
})

// Foodtruck should be able to get all of its orders, past and present
customOrderRoutes.get('/truck/:foodTruckId', (req, res, next)=>{
	const foodTruckId = req.params.foodTruckId;

	Order.findAll({
		where: { food_truck_id: foodTruckId },
		include: [{ model: MenuItem }]
	})
	.then(allOrdersFromThisUser=>{
		res.json(allOrdersFromThisUser);
	})
})

// UPDATE (completed order)
// edit a single order
customOrderRoutes.put('/:orderId', (req, res, next)=>{
	const orderId = req.params.orderId;

	Order.update(
		{ completed: true },
		{ where: {id: orderId} }
	).then(()=>{
		res.sendStatus(200);
	})
})

// DELETE
customOrderRoutes.delete('/:orderId', (req, res, next)=>{
	const orderId = req.params.orderId;

	Order.destroy({
		where: {id: orderId}
	})
})

module.exports = customOrderRoutes;

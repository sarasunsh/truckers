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
	// - TruckId, who is this order for?
	// - MenuItemId, what does this order contain?
	// - Orders (Array), what items did this person order?

	// Example:
	// {
	// 	userId: 123,
	// 	completed: false,
	// 	truckId: 234,
	// 	orders: [
	// 		{menuItemId: 1, quantity: 2},
	// 		{menuItemId: 2, quantity: 1},
	// 		{menuItemId: 2, quantity: 1},
	// 		{menuItemId: 9, quantity: 1},
	// 	]
	// }

customOrderRoutes.post('/', (req, res, next)=>{
	const userId = req.body.userId; // userId: 123
	const truckId = req.body.truckId; // truckId: 234
	const orders = req.body.orders; // orders: { menuItem, quantity }


	console.log(req)
	// sanity check: none of these three things can be missing
	// if !(userId && truckId && orders){
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
			const truckPromise = newOrder.setTruck(truckId);
			const menuItemPromise = newOrder.setMenuItem(order.menuItemId, {quantity: order.quantity});
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
		include: [	{ 	model: MenuItem,
						attributes: ['quantity'] // include 'quantity' attribute from the through-table 'OrderItems'
					},
					{	model: User
					},
					{	model: FoodTruck
					}
				]
	})
	.then(allOrdersFromThisUser=>{
		res.json(allOrdersFromThisUser);
	})
})

// User should be able to get all of her orders, past and present
customOrderRoutes.get('/user/:userId', (req, res, next)=>{
	const userId = req.params.userId;

	Order.findAll({
		where: { userId },
		include: [	{ 	model: MenuItem,
						attributes: ['quantity'] // include 'quantity' attribute from the through-table 'OrderItems'
					}
				]
	})
	.then(allOrdersFromThisUser=>{
		res.json(allOrdersFromThisUser);
	})
})

// Foodtruck should be able to get all of its orders, past and present
customOrderRoutes.get('/truck/:truckId', (req, res, next)=>{
	const truckId = req.params.truckId;

	Order.findAll({
		where: { truckId },
		include: [	{ 	model: MenuItem,
						attributes: ['quantity'] // include 'quantity' attribute from the through-table 'OrderItems'
					}
				]
	})
	.then(allOrdersFromThisUser=>{
		res.json(allOrdersFromThisUser);
	})
})

// UPDATE
customOrderRoutes.put('/', (req, res, next)=>{

})

// DELETE
customOrderRoutes.delete('/', (req, res, next)=>{

})






module.exports = customOrderRoutes;

'use strict'

const db = require('APP/db')
const customProfileRoutes = require('express').Router()
const { User, Order, Review, FoodTruck } = require('../db/models');


customProfileRoutes.param('userID', function(req, res, next, userID){
    User.findById(req.params.userID)
    .then(foundUser => {
        req.user = foundUser;
        next()
    })
    .catch(next);
});

customProfileRoutes.get('/:userID', function(req, res, next) {
    res.json(req.user);
});

customProfileRoutes.get('/:userID/reviews', function(req, res, next) {
    Review.findAll({
        where: {user_id: req.user.id },
        include: [FoodTruck]
    })
    .then(items => res.json(items))
    .catch(next);
});

customProfileRoutes.get('/:userID/orders', function(req, res, next) {
    Order.findAll({
        where: {user_id: req.user.id }
    })
    .then(items => res.json(items))
    // .then(foundOrders => {
    //     foundOrders.map(order => {
    //         FoodTruck.findById(order.food_truck_id)
    //     })
    // }
    .catch(next);
});

module.exports = customProfileRoutes

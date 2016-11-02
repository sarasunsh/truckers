'use strict'

const db = require('APP/db')
const customTruckRoutes = require('express').Router()
const { FoodTruck, MenuItem } = require('../db/models');

// If truckID is part of the request parameter, this will store the appropriate truck info on the request
customTruckRoutes.param('truckID', function(req, res, next, truckID){
    FoodTruck.findById(req.params.truckID)
    .then(foundTruck => {
        req.truck = foundTruck;
        next()
    })
    .catch(next);
});

// Route for main page -- get all trucks
customTruckRoutes.get('/', function(req, res, next) {
    FoodTruck.findAll()
    .then(trucks => res.json(trucks))
    .catch(next);
});


// Route to menu page for specific truck
customTruckRoutes.get('/:truckID', function(req, res, next) {
    res.send(req.truck);  // TO DO: do we need to res.json the response or is there a parser somewhere?
});

// Route to create new truck
customTruckRoutes.post('/', function(req, res, next) {
    FoodTruck.create(req.body)
    .then(newTruck => res.status(201).send(newTruck))
    .catch(next);
});

// Route to update info on specific truck
customTruckRoutes.put('/:truckID', function(req, res, next) {
    req.truck.update(req.body)
    .then(updatedTruck => res.send(updatedTruck))
    .catch(next);
});

// Route to delete specific truck
customTruckRoutes.delete('/:truckID', function(req, res, next) {
    // TO DO: can we use req.truck for deleting? Will this automatically destroy all MenuItems
    req.truck.destroy()
    .then(destroyedTruck => res.send(destroyedTruck))
    .catch(next)
});




module.exports = customTruckRoutes

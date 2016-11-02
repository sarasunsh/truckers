'use strict'

const db = require('APP/db')
const customMenuItemRoutes = require('express').Router()
const { FoodTruck, MenuItem } = require('../db/models');

// If truckID is part of the request parameter, this will store the appropriate truck info on the request
customMenuItemRoutes.param('itemID', function(req, res, next, truckID){
    MenuItem.findById(req.params.menuID)
    .then(foundMenuItem => {
        req.item = foundMenuItem;
        next()
    })
    .catch(next);
});

// If truckID is part of the request parameter, this will store the appropriate truck info on the request
customMenuItemRoutes.param('truckID', function(req, res, next, truckID){
    FoodTruck.findById(req.params.truckID)
    .then(foundTruck => {
        req.truck = foundTruck;
        next()
    })
    .catch(next);
});

// Route to menu page for specific truck
customMenuItemRoutes.get('/:truckID/menu', function(req, res, next) {
    MenuItem.findAll({
        where: {foodtruckId: req.truck.id } // TO DO: confirm how foodtruckId will be stored in MenuItem table
    })
    .then(truckItems => res.send(truckItems)) // TO DO: do we need to res.json the response or is there a parser somewhere?
    .catch(next);
});

// Route to menu page for specific truck
customMenuItemRoutes.get('/:truckID/menu/:itemID', function(req, res, next) {
    res.send(req.item);
});

// Route to create new truck
customMenuItemRoutes.post('/:truckID/menu/', function(req, res, next) {
    req.truck.createMenuItem(req.body) // TO DO: confirm that this works as expected
    .then(newItem => res.status(201).send(newItem))
    .catch(next);
});

// Route to update info on specific truck
customMenuItemRoutes.put('/:truckID/menu/:itemID', function(req, res, next) {
    req.item.update(req.body)
    .then(updatedItem => res.send(updatedItem))
    .catch(next);
});

// Route to delete specific truck
customMenuItemRoutes.delete('/:truckID/menu/:itemID', function(req, res, next) {
    req.item.destroy()
    .then(destroyedItem => res.send(destroyedItem))
    .catch(next)
});




module.exports = customMenuItemRoutes

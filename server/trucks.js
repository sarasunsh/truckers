'use strict'

const db = require('APP/db')
const customTruckRoutes = require('express').Router()
const { FoodTruck, MenuItem, Review } = require('../db/models');

// If truckID is part of the request parameter, this will store the appropriate truck info on the request
customTruckRoutes.param('truckID', function(req, res, next, truckID){
    FoodTruck.findById(req.params.truckID)
    .then(foundTruck => {
        req.truck = foundTruck;
        next()
    })
    .catch(next);
});

// If menu item ID is part of the request parameter, this will store the appropriate item info on the request
customTruckRoutes.param('itemID', function(req, res, next, itemID){
    MenuItem.findById(req.params.itemID)
    .then(foundMenuItem => {
        req.item = foundMenuItem;
        next()
    })
    .catch(next);
});

/// GET REQUESTS -------------------------------------------------------------

/* GETTER method for average price
FoodTruck.findAll(
  include: [(
    model: MenuItems,
    where: { food_truck_id: Sequelize.col('foodTruck.id') },
    attributes: [[Sequelize.fn('AVG', Sequelize.col('price')), 'avgPrice']]
  )]
  )
  .then(trucks => {
    trucks = trucks.map(truck => {
      return truck.avgPrice = truck.MenuItems.avgPrice    <---- I think this works, but not sure!
    });
    res.json(trucks);
  })
  .catch(next)

*/

// Route for main page -- get all trucks
customTruckRoutes.get('/', function(req, res, next) {
    FoodTruck.findAll({
        include: [{
            model: MenuItem,
            attributes: ['price']          // grab price for each menu item
        }]
    })
    .then(trucks => {
      /* the below is admittedly funky and gives you an object array of
         [{{'truck': {all truck props}}, {'avgPrice': $8.32}}, ... ]
         but Sequelize continually foiled my attempts to create a merged object
         at this juncture or aggregate above. It's bleh.
      */
        const pricedTrucks = trucks.map((truck) => {
            let prices = truck.menuItems.map(item => {
                return item['price']                    // prices array
            })                                          // to reduce \/ for avg
            let avgPrice = (prices.reduce((x, y) => { return x + y }) / prices.length).toFixed(2)
            return { truck, avgPrice: avgPrice }        // and add as an object to send with truck
        })
        res.json(pricedTrucks)
    })
    .catch(next);
});

// Route to page for specific truck
customTruckRoutes.get('/:truckID', function(req, res, next) {
    res.json(req.truck);
});

// Route to menu page for specific truck
customTruckRoutes.get('/:truckID/menu', function(req, res, next) {
    MenuItem.findAll({
        where: {food_truck_id: req.truck.id }
    })
    .then(items => res.json(items))
    .catch(next);
});

// Route to reviews page for specific truck
customTruckRoutes.get('/:truckID/reviews', function(req, res, next) {
    Review.findAll({
        where: {food_truck_id: req.truck.id }
    })
    .then(items => res.json(items))
    .catch(next);
});

// Route to page for specific item at specific truck
customTruckRoutes.get('/:truckID/menu/:itemID', function(req, res, next) {
    res.json(req.item);
});


/// POST REQUESTS -------------------------------------------------------------

// Route to create new truck
customTruckRoutes.post('/', function(req, res, next) {
    FoodTruck.create(req.body)
    .then(newTruck => res.json(newTruck))
    .catch(next);
});

// Route to create new menu item for specific truck
customTruckRoutes.post('/:truckID/menu', function(req, res, next) {
    req.truck.createMenuItem(req.body)
    .then(newItem => res.json(newItem))
    .catch(next);
});

// Route to create new review for specific truck
customTruckRoutes.post('/:truckID/reviews', function(req, res, next) {
    req.truck.createReview(req.body)
    .then(newReview => res.json(newReview))
    .catch(next);
});


/// PUT REQUESTS -------------------------------------------------------------

// Route to update info on specific truck
customTruckRoutes.put('/:truckID', function(req, res, next) {
    req.truck.update(req.body)
    .then(updatedTruck => res.json(updatedTruck))
    .catch(next);
});

// Route to update info on menu item for specific truck
customTruckRoutes.put('/:truckID/menu/:itemID', function(req, res, next) {
    req.item.update(req.body)
    .then(updatedItem => res.json(updatedItem))
    .catch(next);
});


/// DELETE REQUESTS -------------------------------------------------------------

// Route to delete specific truck
customTruckRoutes.delete('/:truckID', function(req, res, next) {
    const itemPromise = MenuItem.destroy({
        where: {food_truck_id: req.truck.id }
    });
    const truckPromise = req.truck.destroy();

    Promise.all([itemPromise, truckPromise])
    .then(res => res.sendStatus(204))
    .catch(next)
});

// Route to delete specific truck
customTruckRoutes.delete('/:truckID/menu/:itemID', function(req, res, next) {
    req.item.destroy()
    .then(res => res.sendStatus(204))
    .catch(next)
});


module.exports = customTruckRoutes

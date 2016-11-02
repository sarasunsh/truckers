'use strict';


// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('./user');
const Order = require('./orders');
const MenuItem = require('./menuItem');
const FoodTruck = require('./foodTruck')
const OrderItem = require('./orderItem');


// http://docs.sequelizejs.com/en/latest/docs/associations/
Order.belongsTo(User);  // puts a UserID in the Order table
Order.belongsTo(FoodTruck);

FoodTruck.hasMany(Order);
User.hasMany(Order);

Order.belongsTo(FoodTruck);
FoodTruck.hasMany(MenuItem);

User.hasOne(FoodTruck);
FoodTruck.belongsTo(User); // or else cyclic dependency

Order.belongsToMany(MenuItem, {through: OrderItem});
MenuItem.belongsToMany(Order, {through: OrderItem });

module.exports = { User, Order, FoodTruck, MenuItem, OrderItem };

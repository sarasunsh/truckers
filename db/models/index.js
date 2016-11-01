'use strict';


// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('./user');
const Order = require('./order');
const MenuItem = require('./menuItem');
const FoodTruck = require('./food-truck');
const OrderItem = require('./orderItem');


// http://docs.sequelizejs.com/en/latest/docs/associations/
Order.belongsTo(User);  // puts a UserID in the Order table
Order.belongsTo(FoodTruck);

FoodTruck.hasMany(Order);
User.hasMany(Order);

FoodTruck.hasMany(MenuItem);


Order.belongsToMany(MenuItem, {through: OrderItem});
MenuItem.belongsToMany(Order, {through: OrderItem });

module.exports = {User, Order, FoodTruck, MenuItem};

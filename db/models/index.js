'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('./user');
const Order = require('./order');
const MenuItem = require('./menuItem');
const FoodTruck = ('./food-truck')


// THIS NEEDS TO BE REFINED

//// which one of these two approaches is better?
// Difference between HasOne and BelongsTo -- http://docs.sequelizejs.com/en/latest/docs/associations/
Order.hasOne(User);
Order.belongsTo(User);  // I believe this approach will put a UserID in the Order table

Order.belongsTo(Truck);

User.hasMany(Order);


module.exports = {User, Order, FoodTruck, MenuItem};

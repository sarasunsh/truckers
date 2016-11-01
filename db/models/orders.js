'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Order = db.define('orders', {
  completed: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
})


module.exports = Order;

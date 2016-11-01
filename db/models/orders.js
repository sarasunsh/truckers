'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Order = db.define('orders', {
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 1
  },
  completed: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
})


module.exports = Order;

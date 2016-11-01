'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const OrderItem = db.define('orderitems', {
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 1
  }
})


module.exports = OrderItem;

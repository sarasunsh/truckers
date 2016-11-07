'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const MenuItem = db.define('menuItems', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  type: {
    type: Sequelize.STRING
  }
})


module.exports = MenuItem;

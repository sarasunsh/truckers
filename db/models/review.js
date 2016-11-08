'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Review = db.define('reviews', {
  rating: {
    type: Sequelize.INTEGER
    // ,
    // allowNull: false
  },
  content: {
    type: Sequelize.TEXT
  }
})


module.exports = Review;

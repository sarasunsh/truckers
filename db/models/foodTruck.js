'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const FoodTruck = db.define('foodTrucks', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING
    },
    location: {
        type: Sequelize.STRING
    },
    website: {
        type: Sequelize.STRING
    },
    cuisine: {
        type: Sequelize.STRING,
        allowNull: false
    },
    image: {
        type: Sequelize.TEXT
    }
})

module.exports = FoodTruck

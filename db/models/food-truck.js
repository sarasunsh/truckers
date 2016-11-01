'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const FoodTruck = db.define('FoodTrucks', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT
    },
    location: {
        type: Sequelize.TEXT
    },
    website: {
        type: Sequelize.TEXT
    },
    cuisine: {
        type: Sequelize.STRING,
        allowNull: false
    },
    image: {
        type: Sequelize.TEXT
    },
    tags: {
        type: Sequelize.ARRAY(Sequelize.TEXT)
    }
})

module.exports = FoodTruck

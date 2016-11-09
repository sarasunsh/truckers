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
    },
    isOpen: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
    },
    rating: {
        type: Sequelize.INTEGER,
        validate: {
          min: 1,
          max: 5
        }
    }
}, {
    timestamps: false;
});

module.exports = FoodTruck

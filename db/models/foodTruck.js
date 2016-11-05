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
}

module.exports = FoodTruck

// GETTER instance method for average price
//
// {
//   getterMethods: {
//     avgPrice: function() {
//       this.getMenuItems({
//           attributes: ['price']
//       })
//       .then(function(prices) {
//           return (prices.reduce(function(x,y) { x += y}) / prices.length)
//       })
//     }
//   }
// }

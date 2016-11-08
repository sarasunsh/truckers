'use strict'

const db = require('APP/db')
const FoodTruck = require('./FoodTruck')
const {expect} = require('chai')

describe('FoodTruckModel', () => {
  before('wait for the db', () => db.didSync)

  let goodFakeTruck = {
      name: "Tammy's Tacos",
      description: "Best tacos from Tammy",
      location: "3 Hannover Square",
      website: "www.tammystacosaredope.com",
      cuisine: "Mexican-Fusion",
      image: "http://www.fillmurray.com/200/300"
  }

  let badFakeTruck = {
      description: "no food for you but I'm going to be longer than 255 characters and break the Sequelize STRING limit!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
      location: "nowhere...",
      website: "www.iambadatbeingdata.com"
  }

  describe('Adding and Validating Data', () => {

    it('Successfully adds valid data to the FoodTruck DB', () =>
      FoodTruck.create(goodFakeTruck)
        .then(foodTruckCreated => {
            // console.log(foodTruckCreated);
            expect(foodTruckCreated).to.deep.equal(goodFakeTruck)
        })
    )

    it('Throws an error if you leave out required DB fields', () => {
        var badTruck = FoodTruck.build(badFakeTruck)

        return badTruck.validate()
        .then(foodTruckCreated => {
            expect(foodTruckCreated).to.be.an.instanceOf(Error)
            expect(foodTruckCreated.message).to.contain('content cannot be null');
        })
        
    }
    )



  })
})



//successfully adds to the database
//will throw an error if you leave out something required

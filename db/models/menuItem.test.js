'use strict'

const db = require('APP/db')
const MenuItem = require('./menuItem')
const {expect} = require('chai')

describe('MenuItemModel', () => {
  before('wait for the db', () => db.didSync)

  let goodFakeMenuItem = {
      name: "Taco al Pastor",
      description: "Best tacos ever made",
      price: 100,
      type: "Main Course"
  }

  let badFakeMenuItem = {
      description: "worst tacos ever made",
      type: "beverage"
  }

  describe('Adding and Validating Data', () => {

    it('Successfully adds valid data to the menuItem DB', () =>
      MenuItem.create(goodFakeMenuItem)
        .then(menuItemCreated => {
            expect(menuItemCreated).to.deep.equal(goodFakeMenuItem)
        })
    )

    it('Throws an error if you leave out required DB fields', () => {
        var badItem = MenuItem.build(badFakeMenuItem)

        return badItem.validate()
        .then(menuItemCreated => {
            expect(menuItemCreated).to.be.an.instanceOf(Error)
            expect(menuItemCreated.message).to.contain('content cannot be null');
        })

    }
    )



  })
})

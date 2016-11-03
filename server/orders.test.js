'use strict'

const request = require('supertest-as-promised')
const {expect} = require('chai')
const db = require('APP/db')
const app = require('./start')

// Note that our tests require our 'Order Creation' POST route to work,
// as the fakeOrder below used to create the test data is seeded through
// that route
const fakeOrder = {
  id: 101,
  userId: 110,
  truckId: 101,
  orders: {
    menuItem: 'tacos',
    quantity: 2
  }
}

describe('api/orders', () => {
  before('wait for the db', () => db.didSync)

  describe('creates an order', () => {
    it('POST to / creates an order with userId, truckId, and menu selections', () =>
      request(app)
        .post('/api/orders')
        .send(fakeOrder)
        .expect(201)
      )

    it('POST to / rejects incomplete orders', () =>
      request(app)
        .post('/api/orders')
        .send({
          userId: 500
        })
        .expect(500)
      )

  describe('gets all orders (admin) and specific orders by id', () => {

    before(() =>
      request(app)
        .post('api/orders')
        .send(fakeOrder)
        .then(ok => console.log('fake data seeded for the following GET tests'))
    )

    it('GET to / gets all orders', () =>
      request(app)
        .get('/api/orders')
        .then(res => expect(res.body).to.contain({
          userId: 110
        }))
      )

    it('GET to /:orderId gets a single order by id', () =>
      request(app)
        .get('/api/orders/101')
        .then(res => expect(res.body).to.contain({
          userId: 110
        }))
    )

    it('GET to /:orderId returns an empty array if not found', () =>
      request(app)
        .get('/api/orders/101')
        .then(res => expect(res.body).to.contain({
          []
        }))
      )
  })

  describe('gets all orders for a given user id or food truck', () => {

    before(() =>
      request(app)
        .post('api/orders')
        .send(fakeOrder)
        .then(ok => console.log('fake data seeded for the following GET tests'))
    )

    it('GET to /user/:userId gets all orders by a user', () =>
      request(app)
        .get('/api/orders/user/110')
        .then(res => expect(res.body).to.contain({
          truckId: 101
        }))
      )

    it('GET to /user/:userId returns an empty array if none found', () =>
      request(app)
        .get('/api/orders/user/151')
        .then(res => expect(res.body).to.contain({
          []
        }))
      )

    it('GET to /truck/:truckid can find orders by truck id', () =>
      request(app)
        .get('/api/orders/truck/101')
        .then(res => expect(res.body).to.contain({
          userId: 110
        }))
      )

    it('GET to /truck/:truckid returns an empty array if a truck has no orders', () =>
      request(app)
        .get('/api/orders/truck/151')
        .then(res => expect(res.body).to.contain({
          []
        }))
      )
  })

  describe('allows a vendor to modify or delete orders', () => {

    before(() =>
      request(app)
        .post('api/orders')
        .send(fakeOrder)
        .then(ok => console.log('fake data seeded for the following PUT/DELETE tests'))
    )

    it('PUT to /orders/:orderId updates an order', () =>
      request(app)
        .put('/api/orders/101')
        .send({
          orders: {
            menuItem: 'enchiladas',
            quantity: 1
          }
        })
        .then(res => {
          return request(app)
            .get('/api/orders')
            .then(res => expect(res.body).to.contain({
              orders: {
                menuItem: 'enchiladas',
                quantity: 1
              }
            }))
        })
      )

    it('DELETE to orders/:orderId deletes an order', () =>
      request(app)
        .delete('/api/orders/101')
        .then(res => {
          return request(app)
            .get('/api/orders')
            .then(res => expect(res.body).to.not.contain({
              orders: {
                menuItem: 'tacos',
                quantity: 2
              }
            }))
      })
    )

})

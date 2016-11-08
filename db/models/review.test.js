'use strict'

const db = require('APP/db')
const Review = require('./review')
const {expect} = require('chai')

describe('ReviewModel', () => {
  before('wait for the db', () => db.didSync)

  let goodFakeReview = {
      rating: 10,
      content: "I am great at being a review"
  }

  let badFakeReview = {
      rating: "10",
      content: "I am bad at being a review"
  }

  describe('Adding and Validating Data', () => {

    it('Successfully adds valid data to the menuItem DB', () =>
      Review.create(goodFakeReview)
        .then(reviewCreated => {
            expect(reviewCreated).to.deep.equal(goodFakeReview)
        })
    )

    it('Throws an error if you leave out required DB fields', () => {
        var badReview = Review.build(badFakeReview)

        return badReview.validate()
        .then(reviewCreated => {
            expect(reviewCreated).to.be.an.instanceOf(Error)
            expect(reviewCreated.message).to.contain('content cannot be null');
        })

    }
    )



  })
})

'use strict'

const epilogue = require('./epilogue')
const db = require('APP/db')

const customUserRoutes = require('express').Router()
module.exports = customUserRoutes;

// Epilogue will automatically create standard RESTful routes
const users = epilogue.resource({
    model: db.model('users'),
    endpoints: ['/users', '/users/:id']
})

customUserRoutes.post('/users', (req, res, context) => {
    users.create.write(req.body)
})

customUserRoutes.delete('/users/:id', (req, res, context) => {
    users.delete
        .fetch(req.params.id)
        .write();
})


// Import filters from epilogue that are middleware to handle requests according to user status
const {mustBeLoggedIn, selfOnly, forbidden} = epilogue.filters
users.delete.auth(mustBeLoggedIn) // sends 401 if user not logged in
users.delete.auth(selfOnly('delete')) // only allows user to delete user accounts with IDs that match their own
users.list.auth(forbidden('cannot list users')) //admins cannot see all users
users.read.auth(mustBeLoggedIn) // can only see user details if logged in

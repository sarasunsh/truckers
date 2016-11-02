'use strict'

const epilogue = require('./epilogue')
const db = require('APP/db')
const User = require('../db/models/user')

const customUserRoutes = require('express').Router()

// Custom routes go here.

module.exports = customUserRoutes

// Epilogue will automatically create standard RESTful routes
const users = epilogue.resource({
  model: db.model('users'),
  endpoints: ['/users', '/users/:id']
})


const {mustBeLoggedIn, selfOnly, forbidden} = epilogue.filters
users.delete.auth(mustBeLoggedIn)
users.delete.auth(selfOnly('delete'))
// users.list.auth(forbidden('cannot list users')) //admins cannot see all users
// users.read.auth(mustBeLoggedIn)

//Epilogue does not require us to write traditional routes like line 39 downwards
//However we should conform to our style that has been used in other route files
//(see Issue #41 on waffle.io) 

// function isAuth(req){
//     if(req.user) return true
//     else return res.sendStatus(403)
// }
//
// router.get('/users', isAuth, function(req, res,next){})
//
//
//
// customUserRoutes.get('/:id', function(req, res, next) {
//     User.findById(req.params.id)
//     .then(user => {
//         console.log("USER: ", user);
//         res.send(user)
//     })
//     .catch(next);
// })
//
// customUserRoutes.put('/users/:id', function(req, res, next) {
//
// })
//
// customUserRoutes.post('/users/:id', function(req, res, next) {
//
// })
//
// customUserRoutes.delete('/users/:id', function(req, res, next) {
//
// })

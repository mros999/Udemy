const express = require('express')
const todo = require('../api/todo/todoService')

module.exports = function(server){

    //API ROUTES
    const router = express.Router()
    server.use('/api', router)

    //TODO routes
    const todoService = require('../api/todo/todoService')
    todoService.register(router, '/todos')
}
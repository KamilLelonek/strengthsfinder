require('dotenv').config()

const {HOST, PORT} = require('../config')
const server = require('./server')

server.start(HOST, PORT)

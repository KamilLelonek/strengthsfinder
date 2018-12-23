require('dotenv').config()

const {HOST, PORT} = require('../config')
const server = require('./server')
const {router} = require('./router')
const cors = require('cors')

server.start(HOST, PORT, [router, cors])

require('dotenv').config()

const {HOST, PORT} = require('../config')
const express = require('express')
const app = express()
const debug = require('debug')('server')

const {router} = require('./router')
const {cors} = require('./cors')

function logger(host, port) {
  return () => debug('Listening on %s:%d', host, port)
}

app.use(cors)
app.use(router)

app.listen(PORT, logger(HOST, PORT))

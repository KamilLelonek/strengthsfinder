require('dotenv').config()

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const debug = require('debug')('server')

const {router} = require('./router')

app.use(bodyParser.json())
app.use(router)

function logger(host, port) {
  return () => debug('Listening on %s:%d', host, port)
}

function start(host, port) {
  app.listen(port, logger(host, port))
}

module.exports = {start}

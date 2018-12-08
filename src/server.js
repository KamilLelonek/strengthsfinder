const express = require('express')
const app = express()
const debug = require('debug')('server')
const fp = require('lodash/fp')

function logger(host, port) {
  return () => debug('Listening on %s:%d', host, port)
}

function start(host, port, middlewares) {
  fp.map(middleware => app.use(middleware))(middlewares)

  app.listen(port, logger(host, port))
}

module.exports = {start}

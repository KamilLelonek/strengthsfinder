require('dotenv').config()

const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const {PORT, HOST} = require('../config')
const {router} = require('./router')

function logger() {
  // eslint-disable-next-line no-console
  console.log(`Listening on ${HOST}:${PORT}`)
}

app.use(bodyParser.json())
app.use(router)
app.listen(PORT, logger)

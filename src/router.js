const express = require('express')
const router = express.Router()

const {find} = require('./matcher')

router.get('/', (req, res) => {
  res.status(200).send('OK')
})

find('Kamil Lelonek').then(console.log)

module.exports = {router}

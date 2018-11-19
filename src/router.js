const express = require('express')
const router = express.Router()

const {find} = require('./matcher')

router.get('/', (req, res) => {
  find('Kamil Lelonek')
    .then(results => res.status(200).send(results))
    .catch(({message}) => res.status(400).send(message))
})

module.exports = {router}

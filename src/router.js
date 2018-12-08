const express = require('express')
const router = express.Router()

const {run} = require('./usecase')

router.get('/:name', ({params: {name}}, res) => {
  run(name)
    .then(results => res.status(200).send(results))
    .catch(({message}) => res.status(400).send(message))
})

module.exports = {router}

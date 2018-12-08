const fp = require('lodash/fp')

const {read} = require('./spreadsheet')
const {map} = require('./mapper')
const {find} = require('./matcher')

function run(name) {
  return read()
    .then(fp.map(map))
    .then(fp.curry(find)(name))
}

module.exports = {run}

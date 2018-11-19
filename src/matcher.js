const fp = require('lodash/fp')

const {read} = require('./spreadsheet')

const LIMIT = 10

function matcher(name) {
  return rows => findMatching(partitionByName(rows, name))
}

function findMatching([[person], people]) {
  return order(person, people).slice(0, LIMIT)
}

function order(person, people) {
  return fp.sortBy(sorter(person))(people)
}

function partitionByName(rows, name) {
  return fp.partition(['name', name])(rows)
}

function sorter(person) {
  return (first, second) => keysCount(second, person) - keysCount(first, person)
}

function keysCount(person, personToCompare) {
  return fp.keys(person).filter(key => key in personToCompare).length
}

read(matcher('Kamil Lelonek'))

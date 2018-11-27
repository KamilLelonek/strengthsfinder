const fp = require('lodash/fp')

const {read} = require('./spreadsheet')

const LIMIT = 10

function matcher(name, rows) {
  return findMatching(partitionByName(rows, name))
}

function partitionByName(rows, name) {
  const [[person], people] = fp.partition(['name', name])(rows)

  if (person) {
    return {person, people}
  } else {
    throw new Error(`Użytkownik ${name} nieznaleziony.`)
  }
}

function findMatching({person, people}) {
  return order(person, people).slice(0, LIMIT)
}

function order(person, people) {
  return fp.sortBy(sorter(person))(people)
}

function sorter(person) {
  return (first, second) => keysCount(second, person) - keysCount(first, person)
}

function keysCount(person, personToCompare) {
  return fp.keys(person).filter(key => key in personToCompare).length
}

function find(name) {
  return read().then(rows => matcher(name, rows))
}

module.exports = {find}

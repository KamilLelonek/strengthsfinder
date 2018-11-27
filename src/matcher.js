const fp = require('lodash/fp')

const {read} = require('./spreadsheet')

const LIMIT = 10
const KEYS = ['top1', 'top2', 'top3', 'top4', 'top5']

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
  return fp.take(LIMIT)(order(person, people))
}

function order(person, people) {
  return fp.sortBy(compare(pickKeys(person)))(people)
}

function compare(themesPerson) {
  return personToCompare => {
    const themesOther = pickKeys(personToCompare)

    return -fp.intersection(themesPerson)(themesOther).length
  }
}

function pickKeys(person) {
  return fp.pipe([fp.pick(KEYS), fp.values])(person)
}

function find(name) {
  return read().then(rows => matcher(name, rows))
}

module.exports = {find}

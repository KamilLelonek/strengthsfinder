const GoogleSpreadsheet = require('google-spreadsheet')
const async = require('async')
const fp = require('lodash/fp')

const {SPREADSHEET_ID} = require('../config')
const {map} = require('./mapper')

const doc = new GoogleSpreadsheet(SPREADSHEET_ID)

async.series(
  [
    step =>
      doc.getInfo((_error, {worksheets: [worksheet]}) => {
        this.sheet = worksheet
        step()
      }),
    step =>
      this.sheet.getRows({offset: 4}, (_error, rows) => step(rows.map(map)))
  ],
  result => console.log(result)
)

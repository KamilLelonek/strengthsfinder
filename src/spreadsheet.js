const GoogleSpreadsheet = require('google-spreadsheet')
const async = require('async')

const {SPREADSHEET_ID} = require('../config')
const {map} = require('./mapper')

function read(cb) {
  async.series(
    [
      step => {
        const doc = new GoogleSpreadsheet(SPREADSHEET_ID)

        doc.getInfo((_error, {worksheets: [worksheet]}) => {
          this.sheet = worksheet
          step()
        })
      },
      step =>
        this.sheet.getRows({offset: 4}, (_error, rows) => step(rows.map(map)))
    ],
    result => cb(result)
  )
}

module.exports = {read}

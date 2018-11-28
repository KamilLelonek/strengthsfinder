const GoogleSpreadsheet = require('google-spreadsheet')
const async = require('async')
const fp = require('lodash/fp')

const {SPREADSHEET_ID} = require('../config')
const {map} = require('./mapper')

function read() {
  return new Promise(function(resolve, reject) {
    async.series(
      [
        step => {
          new GoogleSpreadsheet(SPREADSHEET_ID).getInfo(
            (_error, {worksheets: [worksheet]}) => {
              this.sheet = worksheet
              step()
            }
          )
        },
        step =>
          this.sheet.getRows({offset: 4}, (_error, rows) => step(null, rows))
      ],
      (err, [_step1, rows]) => {
        if (err) {
          reject(err)
        } else {
          fp.pipe([fp.map(map), resolve])(rows)
        }
      }
    )
  })
}

module.exports = {read}

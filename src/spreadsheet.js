const GoogleSpreadsheet = require('google-spreadsheet')
const async = require('async')

const {SPREADSHEET_ID} = require('../config')
const {map} = require('./mapper')

function read() {
  return new Promise(function(resolve, reject) {
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
          this.sheet.getRows({offset: 4}, (_error, rows) =>
            step(null, rows.map(map))
          )
      ],
      (err, [_step1, step2]) => {
        if (err) {
          reject(err)
        } else {
          resolve(step2)
        }
      }
    )
  })
}

module.exports = {read}

const GoogleSpreadsheet = require('google-spreadsheet')
const async = require('async')

const {SPREADSHEET_ID} = require('../config')

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
          resolve(rows)
        }
      }
    )
  })
}

module.exports = {read}

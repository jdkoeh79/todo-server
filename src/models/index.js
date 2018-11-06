const fs = require('fs')
const dbConn = require('../db')

module.exports = {

  sync: async function (arg) {
    if (arg.force) {
      const files = fs.readdirSync(__dirname)
        .filter((file) =>
          file !== 'index.js'
        )
      for (const file of files) {
        const model = require('./' + file)
        await model.down(dbConn)
        await model.up(dbConn)
      }
    }
  }

}

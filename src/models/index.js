const config = require('../../configs')
const mysql = require('mysql')
const fs = require('fs')

const conn = mysql.createConnection(config.db)

conn.connect(function (err) {
  if (err) {
    return console.error('Error connecting to database: ' + err.stack)
  }
})

module.exports = {

  sync: async function (arg) {
    if (arg.force) {
      const files = fs.readdirSync(__dirname)
        .filter((file) =>
          file !== 'index.js'
        )
      for (const file of files) {
        const model = require('./' + file)
        await model.down(conn)
        await model.up(conn)
      }
    }
  }

}

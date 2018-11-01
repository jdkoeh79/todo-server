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

  sync: function (arg) {
    if (arg.force) {
      fs
        .readdirSync(__dirname)
        .filter((file) =>
          file !== 'index.js'
        )
        .forEach((file) => {
          const table = require('./' + file)
          table.down(conn)
          table.up(conn)
        })
    }
  }

}

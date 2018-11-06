const config = require('../configs')
const mysql = require('mysql')

const connection = mysql.createConnection(config.db)

connection.connect(function (err) {
  if (err) {
    return console.error('Error connecting to database: ' + err.stack)
  }
})

module.exports = connection

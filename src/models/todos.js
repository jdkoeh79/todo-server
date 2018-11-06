exports.up = function (dbConn) {
  let sql = 'CREATE TABLE IF NOT EXISTS todos (' +
    'Id INT AUTO_INCREMENT PRIMARY KEY, ' +
    'Title VARCHAR(45) NOT NULL, ' +
    'Description VARCHAR(45) NOT NULL, ' +
    'CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP, ' +
    'UpdatedAt TIMESTAMP ON UPDATE CURRENT_TIMESTAMP)'
  dbConn.query(sql, function (err) {
    if (err) {
      console.log(err)
    }
  })
  console.log(sql + '\n')
}

exports.down = function (dbConn) {
  let sql = 'DROP TABLE IF EXISTS todos'
  dbConn.query(sql, function (err) {
    if (err) {
      console.log(err)
    }
  })
  console.log(sql)
}

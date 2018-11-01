exports.up = function (dbConn) {
  let sql = 'CREATE TABLE IF NOT EXISTS users (' +
    'Id INT AUTO_INCREMENT PRIMARY KEY, ' +
    'FirstName VARCHAR(45) NOT NULL, ' +
    'LastName VARCHAR(45) NOT NULL, ' +
    'Email VARCHAR(128) NOT NULL, ' +
    'Password VARCHAR(128) NOT NULL, ' +
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
  let sql = 'DROP TABLE IF EXISTS users'
  dbConn.query(sql, function (err) {
    if (err) {
      console.log(err)
    }
  })
  console.log(sql)
}

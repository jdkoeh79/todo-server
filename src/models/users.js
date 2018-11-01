exports.up = function (dbConn) {
  dbConn.query('CREATE TABLE IF NOT EXISTS users (' +
    'Id INT AUTO_INCREMENT PRIMARY KEY, ' +
    'FirstName VARCHAR(45) NOT NULL, ' +
    'LastName VARCHAR(45) NOT NULL, ' +
    'Email VARCHAR(128) NOT NULL, ' +
    'Password VARCHAR(128) NOT NULL, ' +
    'CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP, ' +
    'UpdatedAt TIMESTAMP ON UPDATE CURRENT_TIMESTAMP)', function (err) {
    if (err) {
      console.log(err)
    }
  })
}

exports.down = function (dbConn) {
  dbConn.query('DROP TABLE IF EXISTS users', function (err) {
    if (err) {
      console.log(err)
    }
  })
}

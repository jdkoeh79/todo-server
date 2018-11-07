let localConfig = {
  hostname: 'localhost',
  port: 8081,
  db: {
    database: 'todo',
    user: 'root',
    password: 'password',
    options: {
      host: '127.0.0.1',
      dialect: 'mysql',
      operatorsAliases: false
    }
  },
  authentication: {
    jwtSecret: 'secret'
  }
}

module.exports = localConfig

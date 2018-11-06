let localConfig = {
  hostname: 'localhost',
  port: 8081,
  db: {
    host: '127.0.0.1',
    user: 'root',
    password: 'password',
    database: 'todo'
  },
  jwtSecret: 'secret'
}

module.exports = localConfig

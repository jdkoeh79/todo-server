const {
  sequelize,
  User
} = require('../src/models')

const Promise = require('bluebird')
const users = require('./users.json')

sequelize.sync({ force: true }) // pass { force: true } to empty the database
  .then(async function () {
    await Promise.all(
      users.map(user => {
        User.create(user)
      })
    )
  })
  .then(() => {
    process.exit()
  })

  
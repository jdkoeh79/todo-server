const {
  sequelize,
  User,
  Todo,
  Category
} = require('../src/models')

const Promise = require('bluebird')
const users = require('./users.json')
const todos = require('./todos.json')
const categories = require('./categories.json')

sequelize.sync({ force: true }) // pass { force: true } to empty the database
  .then(async function () {
    await Promise.all(
      users.map(user => {
        User.create(user)
      })
    )

    await Promise.all(
      todos.map(todo => {
        Todo.create(todo)
      })
    )

    await Promise.all(
      categories.map(category => {
        Category.create(category)
      })
    )
  })

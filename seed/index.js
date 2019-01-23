const {
  sequelize,
  User,
  Todo,
  Item
} = require('../src/models')

const Promise = require('bluebird')
const users = require('./users.json')
const todos = require('./todos.json')
const todoitems = require('./todoitems.json')

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
      todoitems.map(item => {
        Item.create(item)
      })
    )
  })

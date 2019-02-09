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
const todoCategories = require('./todoCategories')

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

    await Promise.all(
      todoCategories.map(entry => {
        let date = new Date().toISOString().slice(0, 19).replace('T', ' ')
        sequelize.query(`
          INSERT INTO TodoCategory (categoryId, todoId, createdAt, updatedAt)
          VALUES (${entry.categoryId}, ${entry.todoId}, "${date}", "${date}")
        `)
      })
    )
  })

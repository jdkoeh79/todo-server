const {
  sequelize,
  User,
  Todo,
  Category
} = require('../src/models')

const users = require('./users.json')
const todos = require('./todos.json')
const categories = require('./categories.json')

sequelize.sync({ force: true })
    .then(() => {

    Promise.all(users.map(u => User.create(u)))
            .then(() => {

            Promise.all(todos.map(t => Todo.create(t)))
                    .then(() => {

                        Promise.all(categories.map(c => Category.create(c)))
                        .then(() => sequelize.close())
                    })
            })
    .catch(e => console.log(e))
})

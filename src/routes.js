const AuthenticationController = require('./controllers/AuthenticationController')
const isAuthenticated = require('./policies/isAuthenticated')
const TodosController = require('./controllers/TodosController')

module.exports = (app) => {
  app.post('/wave', (req, res) => {
    res.send({
      message: `Hello ${req.body.name}!`
    })
  })

  app.post('/register',
    AuthenticationController.register)
  app.post('/login',
    AuthenticationController.login)

  app.get('/todos',
    isAuthenticated,
    TodosController.index)
  app.post('/todos',
    isAuthenticated,
    TodosController.createNewTodo)
  app.delete('/todos',
    isAuthenticated,
    TodosController.deleteTodo)
}

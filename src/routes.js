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

  app.put('/todo/completed',
    isAuthenticated,
    TodosController.updateCompletedStatus)

  app.put('/todo/archived',
    isAuthenticated,
    TodosController.updateArchivedStatus)

  app.put('/todo/priority',
    isAuthenticated,
    TodosController.updatePriority)

  app.put('/todo/dueDate',
    isAuthenticated,
    TodosController.updateDueDate)

  app.put('/todo/dueTime',
    isAuthenticated,
    TodosController.updateDueTime)

  app.put('/todo/note',
    isAuthenticated,
    TodosController.updateNote)

  app.put('/todo/items',
    isAuthenticated,
    TodosController.updateItems)
}

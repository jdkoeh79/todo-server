const { Todo } = require('../models')

module.exports = {
  async index (req, res) {
    const userId = req.user.id
    const where = {
      userId: userId
    }
    try {
      await Todo.findAll({
        where: where
      }).then((todos) => {
        todos.forEach(function (todo, i) {
          todos[i].items = JSON.parse(todos[i].items)
        })
        res.send(todos)
      }).catch((err) => {
        console.log(err)
      })
    } catch (err) {
      res.status(500).send({
        error: err.message
      })
    }
  },
  async createNewTodo (req, res) {
    const userId = req.user.id
    const todoTitle = req.body.title
    try {
      const todo = await Todo.create({
        userId: userId,
        title: todoTitle
      })
      res.send(todo)
    } catch (err) {
      res.status(500).send({
        error: err.message
      })
    }
  },
  async deleteTodo (req, res) {
    const todoId = req.body.todoId
    try {
      await Todo.destroy({
        where:
        {
          id: todoId
        }
      }).then(deletedTodo => {
        console.log('1 = deleted, 0 = not deleted:', deletedTodo)
      })
      res.status(204)
    } catch (err) {
      res.status(500).send({
        error: 'delete todo error: ' + err.message
      })
    }
  }
}

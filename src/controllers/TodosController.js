const { Todo } = require('../models')

module.exports = {
  async index (req, res) {
    const userId = req.user.id
    const where = {
      userId: userId,
      archived: false
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
        error: 'create todo error ' + err.message
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
      }).then(result => {
        console.log('0 = fail, 1 = success:', result)
      })
      res.status(200)
    } catch (err) {
      res.status(500).send({
        error: 'delete todo error: ' + err.message
      })
    }
  },
  async updateCompletedStatus (req, res) {
    const todoId = req.body.todoId
    const completed = req.body.completed
    try {
      await Todo.update({
        completed: completed
      }, {
        where: {
          id: todoId
        }
      }).then(result => {
        console.log('0 = fail, 1 = success:', result)
        res.status(200)
      })
    } catch (err) {
      res.status(500).send({
        error: 'update todo completed status server error: ' + err.message
      })
    }
  },
  async updateArchivedStatus (req, res) {
    const todoId = req.body.todoId
    const archived = req.body.archived
    try {
      await Todo.update({
        archived: archived
      }, {
        where:
        {
          id: todoId
        }
      }).then(result => {
        console.log('0 = fail, 1 = success:', result)
        res.status(200)
      })
    } catch (err) {
      res.status(500).send({
        error: 'update todo archived status server error: ' + err.message
      })
    }
  }
}

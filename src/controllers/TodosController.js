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
      })
        .then((todos) => {
          todos.forEach(function (todo, i) {
            try {
              todos[i].items = JSON.parse(todos[i].items)
              todos[i].categories = JSON.parse(todos[i].categories)
            } catch (err) {
              console.log('Todo.findAll', err.message)
            }
            if (todos[i].categories === null) {
              todos[i].categories = []
            }
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
        let success = (result[0] === 1)
        console.log('0 = fail, 1 = success:', result)
        res.status(200).send({
          success: success
        })
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
        let success = (result[0] === 1)
        console.log('0 = fail, 1 = success:', result)
        res.status(200).send({
          success: success
        })
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
        let success = (result[0] === 1)
        console.log('0 = fail, 1 = success:', result)
        res.status(200).send({
          success: success
        })
      })
    } catch (err) {
      res.status(500).send({
        error: 'update todo archived status server error: ' + err.message
      })
    }
  },
  async updatePriority (req, res) {
    const todoId = req.body.todoId
    const priority = req.body.priority
    try {
      await Todo.update({
        priority: priority
      }, {
        where:
        {
          id: todoId
        }
      }).then(result => {
        let success = (result === 1)
        console.log('0 = fail, 1 = success:', result)
        res.status(200).send({
          success: success
        })
      })
    } catch (err) {
      res.status(500).send({
        error: 'update todo priority server error: ' + err.message
      })
    }
  },
  async updateCategories (req, res) {
    const todoId = req.body.todoId
    const categories = req.body.categories
    try {
      await Todo.update({
        categories: JSON.stringify(categories)
      }, {
        where:
        {
          id: todoId
        }
      }).then(result => {
        let success = (result === 1)
        console.log('0 = fail, 1 = success:', result)
        res.status(200).send({
          success: success
        })
      })
    } catch (err) {
      res.status(500).send({
        error: 'update todo categories server error: ' + err.message
      })
    }
  },
  async updateDueDate (req, res) {
    const todoId = req.body.todoId
    const dueDate = req.body.dueDate
    try {
      await Todo.update({
        dueDate: dueDate
      }, {
        where:
        {
          id: todoId
        }
      }).then(result => {
        let success = (result[0] === 1)
        console.log('0 = fail, 1 = success:', result)
        res.status(200).send({
          success: success
        })
      })
    } catch (err) {
      res.status(500).send({
        error: 'update todo due date server error: ' + err.message
      })
    }
  },
  async updateDueTime (req, res) {
    const todoId = req.body.todoId
    const dueTime = req.body.dueTime
    try {
      await Todo.update({
        dueTime: dueTime
      }, {
        where:
        {
          id: todoId
        }
      }).then(result => {
        let success = (result[0] === 1)
        console.log('0 = fail, 1 = success:', result)
        res.status(200).send({
          success: success
        })
      })
    } catch (err) {
      res.status(500).send({
        error: 'update todo due date server error: ' + err.message
      })
    }
  },
  async updateNote (req, res) {
    const todoId = req.body.todoId
    const note = req.body.note
    try {
      await Todo.update({
        note: note
      }, {
        where:
        {
          id: todoId
        }
      }).then(result => {
        let success = (result[0] === 1)
        console.log('0 = fail, 1 = success:', result)
        res.status(200).send({
          success: success
        })
      })
    } catch (err) {
      res.status(500).send({
        error: 'update todo note server error: ' + err.message
      })
    }
  },
  async updateItems (req, res) {
    const todoId = req.body.todoId
    const items = JSON.stringify(req.body.items)
    try {
      await Todo.update({
        items: items
      }, {
        where:
        {
          id: todoId
        }
      }).then(result => {
        let success = (result[0] === 1)
        console.log('0 = fail, 1 = success:', result)
        res.status(200).send({
          success: success
        })
      })
    } catch (err) {
      res.status(500).send({
        error: 'update todo note server error: ' + err.message
      })
    }
  }
}

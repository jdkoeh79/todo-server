const { Todo } = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const userId = req.user.id
      const where = {
        userId: userId
      }
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
  }
}

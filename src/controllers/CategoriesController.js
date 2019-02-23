const { Category } = require('../models')

module.exports = {
  async index (req, res) {
    const userId = req.user.id
    try {
      const categories = await Category.findAll({
        where: {
          userId: userId
        }
      })
      res.send(categories)
    } catch (err) {
      res.status(500).send({
        error: err.message
      })
    }
  }
}

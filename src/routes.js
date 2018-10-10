module.exports = (app) => {
  app.post('/wave', (req, res) => {
    res.send({
      message: `Hello ${req.body.name}!`
    })
  })
}

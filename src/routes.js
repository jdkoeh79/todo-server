const AuthenticationController = require('./controllers/AuthenticationController')

module.exports = (app) => {
  app.post('/wave', (req, res) => {
    res.send({
      message: `Hello ${req.body.name}!`
    })
  })

  app.post('/login', (req, res) => {
    AuthenticationController.login(req, res)
  })
}

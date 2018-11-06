const AuthenticationController = require('./controllers/AuthenticationController')

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
}

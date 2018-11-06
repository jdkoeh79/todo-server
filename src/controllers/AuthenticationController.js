// const jwt = require('jsonwebtoken')
// const config = require('../../configs')
const db = require('../db')

// function jwtSignUser (user) {
//   const ONE_WEEK = 60 * 60 * 24 * 7
//   return jwt.sign(user, config.jwtSecret, {
//     expiresIn: ONE_WEEK
//   })
// }

module.exports = {
  // async register (req, res) {
  //   try {
  //
  //     res.send({
  //       user: userJson,
  //       token: jwtSignUser(userJson)
  //     })
  //   } catch (err) {
  //     res.status(400).send({
  //       error: 'This email account is already in use.'
  //     })
  //   }
  // },
  async login (req, res) {
    try {
      const { email } = req.body
      const getUserSQL = 'SELECT * FROM users WHERE Email = ?'
      const user = db.query(getUserSQL, email, (err, results) => {
        if (err) throw err
        return results[0]
      })

      console.log('user', user._results)
      // console.log(user)
      // const userJson = user.toJSON()
      // console.log(userJson)
      // res.send({
      //   user: userJson,
      //   token: jwtSignUser(userJson)
      // })
    } catch (err) {
      console.log(err)
      // res.status(500).send({
      //   error: err
      // })
    }
  }
}

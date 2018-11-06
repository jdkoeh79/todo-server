const passport = require('passport')
const { Users } = require('./models')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const config = require('../configs')

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.authentication.jwtSecret
}

passport.use(
  new JwtStrategy(
    options,
    async function (jwtPayload, done) {
      try {
        const user = await Users.findOne({
          where: {
            id: jwtPayload.id
          }
        })
        if (!user) {
          return done(new Error(), false)
        }
        return done(null, user)
      } catch (err) {
        return done(new Error(), false)
      }
    }
  )
)

module.exports = null

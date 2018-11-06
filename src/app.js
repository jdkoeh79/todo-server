const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const { sequelize } = require('./models')
const config = require('../configs')

const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('./passport')

require('./routes')(app)

const hostname = config.hostname
const port = config.port

sequelize.sync({ force: false })
  .then(() => {
    app.listen(port, () => {
      console.log(`Server listening on http://${hostname}:${port}...`)
    })
  })

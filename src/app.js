const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const config = require('../configs')
const db = require('./models')

const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('./routes')(app)

const hostname = config.hostname
const port = config.port

db.sync({ force: true })
  .then(() => {
    app.listen(port, () => {
      console.log(`Server listening on http://${hostname}:${port}...`)
    })
  })

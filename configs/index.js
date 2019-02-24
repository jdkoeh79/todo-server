const { merge } = require('lodash')

const env = process.env.NODE_ENV || 'local'
const envConfig = require('./' + env)

let defaultConfig = {
    env: env
}

module.exports = merge(defaultConfig, envConfig)

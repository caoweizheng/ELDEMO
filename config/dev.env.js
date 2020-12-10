'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_HOST: '"/api"'
  // BASE_URL: '"http://localhost:8888"'
  // BASE_URL: '"http://121.4.100.175:8888"'
})

const knex = require('knex')
const configurations = require('../knexfile.js')

const environment = process.env.NODE_ENV 

module.exports = knex(configurations[environment])
const knex = require('knex')
const databaseconfig = require('./knexfile')
const databaseconnection = knex(databaseconfig)


module.exports = {databaseconnection}
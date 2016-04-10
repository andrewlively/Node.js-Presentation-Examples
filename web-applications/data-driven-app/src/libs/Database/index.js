const config = require(`../../../config.json`);
const knex = require('knex')({
  client: config.db.client,
  connection: {
    host     : config.db.host,
    port     : config.db.port,
    user     : config.db.user,
    password : config.db.password,
    database : config.db.name
  }
});
const database = require('bookshelf')(knex);

exports.User = database.Model.extend({
  tableName: 'User'
});

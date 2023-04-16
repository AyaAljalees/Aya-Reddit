const { Pool } = require('pg');
const { dbUrl, ssl } = require('../../config');

const option = {
  connectionString: dbUrl,
  ssl,
};

const connection = new Pool(option);

module.exports = connection;

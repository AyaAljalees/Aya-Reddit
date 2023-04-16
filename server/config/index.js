require('dotenv').config();

const { PORT } = process.env || 6000;
// eslint-disable-next-line camelcase
const { Test_DB_URL, DEV_DB_URL, DB_URL } = process.env;
const nodeEnv = process.env.NODE_ENV;
let dbUrl;
let ssl = false;
if (!nodeEnv) {
  throw new Error('invalid node environment');
}
switch (nodeEnv) {
  case 'test':
    // eslint-disable-next-line camelcase
    dbUrl = Test_DB_URL;
    break;
  case 'development':
    dbUrl = DEV_DB_URL;
    break;
  case 'production':
    dbUrl = DB_URL;
    ssl = {
      require: true,
      rejectunauthorized: false,
    };
    break;
  default:
    throw new Error('Database connection url must be specified');
}

module.exports = {
  PORT, dbUrl, ssl,
};

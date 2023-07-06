const Sequelize = require('sequelize');
require('dotenv').config();
const env = require('dotenv').config().parsed;
let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    env["process.env.DB_NAME"],
    env["process.env.DB_USER"],
    env["process.env.DB_PW"],
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}

module.exports = sequelize;


const mysql = require("mysql2");
require("dotenv/config");

const pool = mysql.createPool({
  multipleStatements: true,
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  user: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
});

module.exports = pool;

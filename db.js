const { Pool } = require("pg");
const { host, port } = require("pg/lib/defaults");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "sekolah",
  password: "aditya768",
  port: 5432,
});

module.exports = pool;

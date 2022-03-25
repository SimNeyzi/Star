const Pool = require('pg').Pool;

const pool = new Pool({
  user: "sim",
  host: "localhost",
  database: "stars",
  port: 5432,
})

module.exports = pool;
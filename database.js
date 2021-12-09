const Pool = require('pg').Pool;
const pool = new Pool({
 user: "postgres",
 password: "Kalamees25",
 database: "testwad",
 host: "localhost",
 port: "5432"
});
module.exports = pool;
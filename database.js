const Pool = require('pg').Pool;
const pool = new Pool({
 user: "postgres",
 password: "PASSw0rd765",
 database: "postgres",
 host: "localhost",
 port: "5432"
});
module.exports = pool;
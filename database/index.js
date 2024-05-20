const {Pool} = require("pg");

// importamos la dependencia de dotenv
require("dotenv").config({ path: "./.env" });

const pool = new Pool({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    allowExitOnIdle: true,
})

module.exports = { pool };
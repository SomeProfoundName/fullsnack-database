const { createPool } = require('mysql2');

const db = createPool({
    host:process.env.HOST,
    user:process.env.USER1,
    password:process.env.PASSWORD,
    database:process.env.DATABASE
}).promise();

module.exports=db;
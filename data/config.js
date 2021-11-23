const mysql = require('mysql');

//set database connection credentials
const config = {
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'api',
};

//Create a MySQL pool
const pool = mysql.createPool(config);

//export the pool
module.exports = pool;
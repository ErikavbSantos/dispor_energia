const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'nome_host',
    port: 'port',  
    user: 'user_host',
    password: 'password_host',
    database: 'database_host',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool;
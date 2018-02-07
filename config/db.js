const mysql = require('mysql');

module.exports = function(){
//database connections infos
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '4925',
    database: 'nodejs'
  });
}
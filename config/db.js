const mysql = require('mysql');

//NEW: wrapper method - correction not-to-auto-load everytime the app starts
const connMySQL = function(){
  console.log('Conexão estabelecida');
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '4925',
    database: 'nodejs'
  });
};

module.exports = function(){
  console.log('Módulo de conexao carregado')
  return connMySQL;
}
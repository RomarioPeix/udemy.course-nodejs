function Noticias(connection){
  this._connection = connection;
}
/**
* @description Used for get all the noticias from database
* @param {Connection Info} connection your db connection
* @param {Error handler} callback it is the callback/ error handler for your consult
*/
Noticias.prototype.getNoticias = function(callback){
  this._connection.query('select * from noticias', callback);
}

/**
* @description Used for get a single noticia from database
* @param {Connection Info} connection your db connection
* @param {Error handler} callback it is the callback/ error handler for your consult
*/
Noticias.prototype.getNoticia = function(callback){
  this._connection.query('select * from noticias where id_noticia = 2', callback);
}

/**
 * @description Used for save a new noticia in the database
 * @param {Data} noticia the data you want to save
 * @param {Connection Info} connection your db connection
 * @param {Error handler} callback it is the callback/ error handler for your consult
 */
Noticias.prototype.salvarNoticia = function(noticia, callback){
  this._connection.query('insert into noticias set ? ', noticia, callback);
}

module.exports = function(){
  return Noticias;
}
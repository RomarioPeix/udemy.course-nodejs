function Noticias(connection){
  this._connection = connection;
}
/**
* @description Used for get all the noticias from database
* @param {Connection Info} connection your db connection
* @param {Error handler} callback it is the callback/ error handler for your consult
*/
Noticias.prototype.getNoticias = function(callback){
  this._connection.query('select * from noticias order by data_criacao desc', callback);
}

/**
* @description Used for get a single noticia from database
* @param {Connection Info} connection your db connection
* @param {Error handler} callback it is the callback/ error handler for your consult
* @param {ID} query the noticia's Id comming from the url
*/
Noticias.prototype.getNoticia = function(query, callback){
  this._connection.query('select * from noticias where id_noticia = ' + query.id_noticia, callback);
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

/**
* @description Used for get the last noticias added to the database
* @param {Connection Info} connection your db connection
* @param {Error handler} callback it is the callback/ error handler for your consult
 */
Noticias.prototype.getUltimasNoticias= function(callback){
  this._connection.query('select * from noticias order by data_criacao desc limit 5', callback)
}

module.exports = function(){
  return Noticias;
}
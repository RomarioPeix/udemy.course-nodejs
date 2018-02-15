module.exports = function(){

  /**
   * @description Used for get all the noticias from database
   * @param connection your db connection
   * @param callback it is callback/ error handler for your consult
   */
  this.getNoticias = function(connection, callback){
    return connection.query('select * from noticias', callback);
  }

  /**
   * @description Used for get a single noticia from database
   * @param connection your db connection
   * @param callback it is callback/ error handler for your consult
   */
  this.getNoticia = function(connection, callback){
    return connection.query('select * from noticias where id_noticia = 2', callback);
  }

  this.salvarNoticia = function(noticia, connection, callback){
    return connection.query('insert into noticias set ? ', noticia, callback);
  }

  return this;

}
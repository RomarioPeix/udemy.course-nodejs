//page single noticia
module.exports = function(app) {
  app.get('/noticias', function(req, res){

    //modulo conexão com banco
    var connection = app.config.db();

    connection.query('select * from noticias', function(err, data){ //sql requisition
      if(err){ //if there's a error
        console.log(err); //show error
      } else {
        res.render("../views/noticias/noticias", {noticias : data}); //set data to views
      }
    });
  });
  
}
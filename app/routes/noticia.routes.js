//page single noticia
module.exports = function(app) {
  app.get('/noticia', function(req, res){

    //modulo conexão com banco
    var connection = app.config.db();

    connection.query('select * from noticias where id_noticia = 1', function(err, data){ //sql requisition
      if(err){ //if there's a error
        console.log(err); //show error
      } else {
        res.render("../views/noticias/noticia", {noticia : data}); //set data to views
      }
    });
  });
  
}
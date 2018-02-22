//page single noticia
module.exports = function(application) {
  application.get('/noticia', function(req, res){

    //modulo conexão com banco
    var connection = application.config.db();
    var noticiasModel = new application.app.models.noticiasModel(connection);

    noticiasModel.getNoticia(function(err, data){ //sql requisition
      if(err){ //if there's a error
        console.log(err); //show error
      } else {
        res.render("../views/noticias/noticia", {noticia : data}); //set data to views
      }
    });
  });
}
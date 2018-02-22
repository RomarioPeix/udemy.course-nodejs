//page single noticia
module.exports = function(application) {
  application.get('/noticias', function(req, res){

    //modulo conexão com banco
    var connection = application.config.db();
    var noticiasModel = new application.app.models.noticiasModel(connection);

    noticiasModel.getNoticias(function(err, data){
    if(err){ //if there's a error
      console.log(err); //show error
    } else {
      res.render("../views/noticias/noticias", {noticias : data}); //set data to views
    }     
    });
  });
  
}
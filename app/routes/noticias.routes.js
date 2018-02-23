//page single noticia
module.exports = function(application) {
  //getting all noticias
  application.get('/noticias', function(req, res){
    application.app.controllers.noticias_controller.noticias(application, req, res);
  });
  
  //getting a single noticia
  application.get('/noticia', function(req, res){
    application.app.controllers.noticias_controller.noticia(application, req, res);
  });
}
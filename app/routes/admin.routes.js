// form inclusao de noticia
module.exports = function(application) {
  application.get('/formulario-inclusao-noticia', function(req, res){
    res.render('../views/admin/form_add_noticia');
    
    //saving the new noticia
    application.post('/noticias/salvar', function(req, res){
      var noticia = req.body;

      //conexao
      var connection = application.config.db();
      var noticiasModel = application.app.models.noticiasModel;

      noticiasModel.salvarNoticia(noticia, connection, function(err, data){
        if(err){ //if there's a error
          console.log(err); //show error
        } else {
          res.redirect('/noticias');
        }     
        });
      //model

      //salvar noticia
    });
  });
}
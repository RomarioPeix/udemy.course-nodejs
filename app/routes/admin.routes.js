// form inclusao de noticia
module.exports = function(application) {
  application.get('/formulario-inclusao-noticia', function(req, res){
    res.render('../views/admin/form_add_noticia', {validacao : {}, noticia : {}});

    //saving the new noticia
    application.post('/noticias/salvar', function(req, res){
      var noticia = req.body;

      //form validation
      req.assert('titulo', 'Título é obrigatório').notEmpty();
      req.assert('resumo', 'Resumo é obrigatório').notEmpty();
      req.assert('resumo', 'O resumo deve conter entre  10 e 100 caracteres.').len(10, 100);
      req.assert('autor', 'O nome do autor é obrigatório').notEmpty();
      req.assert('autor', 'O nome do autor deve conter entre 5 e 30 caracteres.').len(5, 30);
      req.assert('noticia', 'Notícia é obrigatório').notEmpty();
      //check if it's a date in (YYYY-MM-DD) format
      req.assert('data_noticia', 'Data é obrigatório').isISO8601();

      //if there is a error, set to errors variable
      var errors = req.validationErrors();

      //if errors is not empty
      if(errors){
        res.render('../views/admin/form_add_noticia', {validacao : errors, noticia : noticia});
        return;
      }

      //conexao
      var connection = application.config.db();

      //model
      var noticiasModel = new application.app.models.noticiasModel(connection);

      //salvar noticia
      noticiasModel.salvarNoticia(noticia, function(err, data){
        if(err){ //if there's a error
          console.log(err); //show error
        } else {
          res.redirect('/noticias');
        };
        });
    });
  });
}
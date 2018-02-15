// form inclusao de noticia
module.exports = function(app) {
  app.get('/formulario-inclusao-noticia', function(req, res){
    res.render('../views/admin/form_add_noticia');
    
    //saving the new noticia
    app.post('/noticias/salvar', function(req, res){
      var noticias = req.body;
      res.send(noticias);
    });
  });
}
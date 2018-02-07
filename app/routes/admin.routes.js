// form inclusao de noticia
module.exports = function(app) {
  app.get('/formulario-inclusao-noticia', function(req, res){
    res.render('../views/admin/form_add_noticia');
  });
}
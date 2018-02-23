// form inclusao de noticia
module.exports = function (application) {
  application.get('/formulario-inclusao-noticia', function (req, res) {
    application.app.controllers.admin_controller.formulario_inclusao_noticia(application, req, res);
  });

  //saving the new noticia
  application.post('/noticias/salvar', function (req, res) {
    application.app.controllers.admin_controller.noticias_salvar(application, req, res);
  });
}
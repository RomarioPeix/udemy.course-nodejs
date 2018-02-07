//page single noticia
module.exports = function(app) {
  app.get('noticia/', function(req, res){
    res.render('../views/noticias/noticia')
  });
}
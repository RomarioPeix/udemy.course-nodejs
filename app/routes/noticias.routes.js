 //get database info
 const connection =  require('../../config/db')();

//page single noticia
module.exports = function(app) {
  app.get('/noticia', function(req, res){
    connection.query('select * from noticias', function(err, data){
      if(err){
        console.log(err);
      } else {
        res.render("../views/noticias/noticias", {noticias : data});
      }
    });
  });
}
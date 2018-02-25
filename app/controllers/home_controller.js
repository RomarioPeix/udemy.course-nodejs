module.exports.home = function(application, req, res){

  //db connection
  const connection = application.config.db();

  //connection model
  const noticiasModel = new application.app.models.noticiasModel(connection);

  noticiasModel.getUltimasNoticias(function(err, data){
    if (err){
      console.log(err);
    } else {
      res.render("home/index.ejs", {noticias : data});
    }
  });
}
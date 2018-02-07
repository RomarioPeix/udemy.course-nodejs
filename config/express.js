const express = require('express');
const app = express();

//set ejs as the view engine for our application views
app.set('view engine', 'ejs');

//main port
const port = 3000;

//routes - home
app.get('/', function(req, res){
  res.render('../views/home/index');
});

// form inclusao de noticia
app.get('/formulario-inclusao-noticia', function(req, res){
  res.render('../views/admin/form_add_noticia');
})

// page noticias
app.get('/noticias', function(req, res){
  res.render('../views/noticias/noticias');
});

//page single noticia
app.get('noticia/:name', function(req, res){
  res.render('../views/noticias/noticia')
});

app.listen(port, function(){
  console.log("Server running on port " + port);
});

module.exports = app;
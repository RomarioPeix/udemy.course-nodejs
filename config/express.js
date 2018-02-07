const express = require('express');
const app = express();

//set ejs as the view engine for our application views
app.set('view engine', 'ejs');

//views of our applcations
app.set('views', './app/views');

//main port
const port = 3000;

app.listen(port, function(){
  console.log("Server running on port " + port);
});

module.exports = app;
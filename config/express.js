const express = require('express');
const app = express();
const consign = require('consign');

/**
 * Include dependencies to run on consign - auto-load
 * @name app/routes - Include all the routes for our application
 * @name db - Include database connection to routes
 */
consign().include('app/routes')
  .then('app/models')
  .then('config/db.js') //!important to put the file extension. otherwise, the 'then' will understand as an folder
  .into(app);

//set ejs as the view engine for our application views
app.set('view engine', 'ejs');

//application views
app.set('views', './app/views');

//main port
const port = 3000;

app.listen(port, function(){
  console.log("Server running on port " + port);
});

module.exports = app;
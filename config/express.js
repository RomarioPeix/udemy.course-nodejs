const express = require('express');
const app = express();
const consign = require('consign');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

//body parser middleware
app.use(bodyParser.urlencoded({
  extended: true, //allow the form information to return like a JSON object
}));

//express validator middleware
app.use(expressValidator());

/**
 * Include dependencies to run on consign - auto-load
 * @name app/routes - Include all the routes for our application
 * @name db - Include database connection to routes
 */
consign().include('app/routes')
  .then('app/models')
  .then('config/db.js') //!important to put the file extension. otherwise, the 'then' will understand as an folder
  .then('app/controllers')
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
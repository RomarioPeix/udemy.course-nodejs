const app = require('./config/express');

//applcation routes
const routeNoticia = require('./app/routes/noticias.routes')(app);
const routeHome = require('./app/routes/home.routes')(app);
const routeAdmin = require('./app/routes/admin.routes')(app);

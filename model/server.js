const express = require("express");
const cors = require("cors");
const hbs = require('hbs');

const { dbConnection } = require('../database/config.db');
const { clientDbConnection } = require('../database/cliente.db');

class Server {

    constructor() {
    this.app   = express();
    this.port  = process.env.PORT;
    
    this.pages = {
      home: '/',
    };
    
    this.paths = {
      auth:  '/auth',
      users: '/users',
      clients: '/client',
      consults: '/consults',
      consultsDetails: '/consult_datails'
    };

    //Ejecutamos la conexion a la BD
    this.connectDB();

    //Ejecutamos los middlewares
    this.middlewares();
    //Ejecutamos las rutas de la aplicacion
    this.router();

    this.handlebars();
  }

  handlebars(){
    this.app.set('view engine', 'hbs');
    hbs.registerPartials(__dirname + './views/partials')
  }

  //Llamamos a la BD
  async connectDB(){
    await dbConnection();
    await clientDbConnection();
  }

  middlewares() {

    //CORS
    this.app.use( cors() );

    //Lectura y parseo del body
    this.app.use(express.json() );

    //Directorio publico
    this.app.use( express.static('public'));

  }

  //Establecemos las rutas correspondientes para cada uno de los distintos recursos
  router(){
    this.app.use( this.pages.home,            require('../routes/index.routes.js'))

    this.app.use( this.paths.auth,            require('../routes/auth.routes.js'))
    this.app.use( this.paths.users,           require('../routes/user.routes.js'))
    this.app.use( this.paths.clients,         require('../routes/client.routes.js'))
    this.app.use( this.paths.consults,        require('../routes/consult.routes.js'))
    this.app.use( this.paths.consultsDetails, require('../routes/consultsDetails.routes.js'))
  }

  listen() {
    this.app.listen( this.port, ()=>{
        console.log(`App leventada en el puerto:${this.port}`);
    });
  }
}

module.exports = {
    Server
}
const express = require("express");
const cors = require("cors");
const hbs = require('hbs');
const path = require('path');

const { dbConnection } = require('../database/config.db');

class Server {

    constructor() {
    this.app   = express();
    this.port  = process.env.PORT;
    
    this.pages = {
      home: '/',
      bitacora:'/bitacora',
      register: '/register'
    };
    
    this.paths = {
      auth:  '/auth',
      brands: '/brands',
      clients: '/client',
      consults: '/consults',
      consultsDetails: '/consult_datails',
      consultPhoneAndMembership: '/consult_phone_membership',
      employes: '/employes',
      methods: '/methods',
      users: '/users'
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
    //Establecemos la ubicacion de los archivos de partials
    const filePath = path.resolve(__dirname, '../views/partials');
    hbs.registerPartials( filePath)
  }

  //Llamamos a la BD
  async connectDB(){
    await dbConnection();
  }

  middlewares() {

    //CORS
    this.app.use( cors() );

    //Lectura y parseo del body
    this.app.use(express.json() );

    //Directorios publicos para servir archivos estáticos
    this.app.use( express.static('public'));
    this.app.use( express.static('src'));


  }

  //Establecemos las rutas correspondientes para cada uno de los distintos recursos
  router(){
    this.app.use( this.pages.home,            require('../routes/home.routes.js'))
    this.app.use( this.pages.register,        require('../routes/register.routes.js'))
    this.app.use( this.pages.bitacora,        require('../routes/bitacora.routes'))


    this.app.use( this.paths.auth,                      require('../routes/auth.routes.js'))
    this.app.use( this.paths.brands,                    require('../routes/brands.routes'))
    this.app.use( this.paths.users,                     require('../routes/user.routes.js'))
    this.app.use( this.paths.clients,                   require('../routes/client.routes.js'))
    this.app.use( this.paths.consults,                  require('../routes/consult.routes.js'))
    this.app.use( this.paths.consultsDetails,           require('../routes/consultsDetails.routes.js'))
    this.app.use( this.paths.consultPhoneAndMembership, require('../routes/consultPhoneAndMembership.routes.js'))
    this.app.use( this.paths.methods,                   require('../routes/method.routes.js'))
    this.app.use( this.paths.employes,                  require('../routes/employed.routes.js'))

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
const express = require("express");
const cors = require("cors");

const { dbConnection } = require('../database/config.db');

class Server {

    constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.paths = {
      users: '/users'
    };

    //Ejecutamos la conexion a la BD
    this.connectDB();

    //Ejecutamos los middlewares
    this.middlewares();
    //Ejecutamos las rutas de la aplicacion
    this.router();
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

    //Directorio publico
    this.app.use( express.static('public'));

  }

  //Establecemos las rutas correspondientes para cada uno de los distintos recursos
  router(){
    this.app.use( this.paths.users, require('../routes/user.routes.js'))
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
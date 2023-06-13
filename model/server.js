const express = require("express");
const cors = require("cors");

class Server {

    constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.paths = {};

    //Ejecutamos los middlewares
    this.middlewares();
    //Ejecutamos las rutas de la aplicacion
    this.router();
  }

  middlewares() {

    //CORS
    this.app.use( cors() );

    //Lectura y parseo del body
    this.app.use(express.json() );

    //Directorio publico
    this.app.use( express.static('public'));

  }

  router(){
    
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
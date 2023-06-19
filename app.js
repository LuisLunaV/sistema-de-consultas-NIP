require('dotenv').config({path:'.env'});

const { Server } = require('./model/server.js');


const server = new Server();
server.listen();

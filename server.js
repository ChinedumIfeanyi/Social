var app = require('./app');
var http = require('http');
var config = require('./config/utils');
const server = http.createServer(app);
server.listen(config.port, () => console.log('Server Started on port ', config.port));
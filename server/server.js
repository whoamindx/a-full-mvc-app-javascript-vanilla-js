const http = require('http');
const app = require('./config/express');

http.createServer(app).listen(3000, function() {
  console.log('Servidor estutando na porta: ' + this.address().port);
});

var port = process.env.PORT || 1337;
var host = process.env.VCAP_APP_HOST || "127.0.0.1";
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Jason\n');
}).listen(port, host);
console.log('Server running at http://' + host + ':' + port + '/');

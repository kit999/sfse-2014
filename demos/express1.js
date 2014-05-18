// Canonical Express 'Hello World'
var express = require('express');
var app = express();
app.get('/', function(req, res) {
  res.end('Hello World\n');
});
// Other routes 404
app.listen(1337);
console.log('Server running at http://127.0.0.1:1337/');

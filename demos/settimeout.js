// Demonstrate setTimeout (+ require).
var Util = require('util');

Util.log('First');
setTimeout(function() {Util.log('Hello, world!');}, 5000);
Util.log('Second');

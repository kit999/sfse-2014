// Demonstrate one-time event listener.
var Util = require('util');
var EventEmitter = require('events').EventEmitter;
var ee = new EventEmitter();
var event = 'occurred';
function onEvent(arg1) {
    Util.log(arg1);
}

Util.log('First');
ee.once(event, onEvent);
setTimeout(function() {ee.emit(event, 'Third');}, 5000);
// Other events are processed while waiting for our event...
setTimeout(function() {Util.log('Fourth');}, 1000);
// Events are processed in the order they qre received, not the order they are registered.
Util.log('Second');

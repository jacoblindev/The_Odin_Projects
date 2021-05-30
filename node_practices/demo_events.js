const events = require('events');
const eventEmitter = new events.EventEmitter();

// Create an event handler:
const myEventHandler = function() {
    console.log('I heard someone scream!!!😱');
}

//Assign handler to an event:
eventEmitter.on('scream', myEventHandler);

//Fire the event:
eventEmitter.emit('scream');
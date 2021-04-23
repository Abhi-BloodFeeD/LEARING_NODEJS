const EventEmitter = require('events')
//EventEmitter is a class
const customEmitter = new EventEmitter()

//when the event 'response' takes place
customEmitter.on('response',() => {
  console.log(`data received`)
})
//emit function
customEmitter.emit(`response`)
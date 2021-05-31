const WS = require('./ws/ws')
const config = require('./config.json')
var ws = new WS(config.ws.token, config.ws.port)





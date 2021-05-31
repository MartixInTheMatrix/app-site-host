const express = require('express')
const hbs = require('express-handlebars')
const bodyParser = require("body-parser");
const path = require('path');


/**
 * @param {string}         token 
 * @param {number}         port   
 */
class WebSocket {

    constructor(token, port, client) {
        this.token = token
        this.port = port
        this.app = express()
        

        this.app.set('views', path.join(__dirname, 'views'))
        this.app.set('view engine', 'hbs')
        this.app.use(express.static(path.join(__dirname, 'public')))
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(bodyParser.json());

        this.registerRoots()

        this.server = this.app.listen(port, () => {
            console.log("Websocket API set up at localhost:" + this.server.address().port)
        })
    }

    /**
     * @param {string} token 
     * @returns {boolean}
    */


    registerRoots() {

        this.app.get('/', (req, res) => {

            res.render('home',
            {title:'DCS'})

        
        })
        this.app.get('/client', (req, res) => {
            let token = req.query.token
            let email = token
            res.render('panel',
            {title: `panel - ${token}`, email})

        
        })

        this.app.get('/web-host.hbs', (req, res) => {
            res.render('web-host')

        
        })
        this.app.get('/vps-host.hbs', (req, res) => {
            res.render('vps-host')

        
        })
        this.app.get('/game-host.hbs', (req, res) => {
            res.render('game-host')

        
        })
        this.app.get('/home.hbs', (req, res) => {
            res.render('home')

        
        })
       
    }

}

module.exports = WebSocket

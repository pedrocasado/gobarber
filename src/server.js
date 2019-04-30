const express = require('express')
const nunjucks = require('nunjucks')
const path = require('path')
const session = require('express-session')
const LokiStore = require('connect-loki')(session)
const flash = require('connect-flash')

class App {
    constructor () {
        this.express = express()
        this.isDev = process.env.NODE_ENV !== 'production'

        this.middlewares()
        this.views()
        this.routes()
    }

    middlewares () {
        this.express.use(express.urlencoded({ extended: false }))
        this.express.use(flash())
        this.express.use(
            session({
                name: 'global',
                // use redis for production
                store: new LokiStore({
                    path: path.resolve(__dirname, '..', 'tmp', 'session.db')
                }),
                secret: 'useEnvVarHere',
                resave: false,
                saveUninitialized: true
            })
        )
    }

    views () {
        nunjucks.configure(path.resolve(__dirname, 'app', 'views'), {
            watch: this.isDev, // watch views changes
            express: this.express,
            autoescape: true
        })

        this.express.use(express.static(path.resolve(__dirname, 'public')))
        this.express.set('view engine', 'njk')
    }

    routes () {
        this.express.use(require('./routes.js'))
    }
}

module.exports = new App().express

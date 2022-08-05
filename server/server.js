const express = require('express');
const app = express()
const config = require('./config')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const router = require('./network/routes')

var url = 'mongodb://localhost:27017/IbizaRestoBar'
mongoose.Promise = global.Promise

// const db = require('./db')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
router(app)

const start = async () => {
    // await db()
    mongoose.connect(url, { useNewUrlparser: true }).then(
        () => {
            console.log('Conexion a la BD exitosa');
            app.listen(config.server.port, () =>
                console.log(
                    `Server: http://${config.server.host}:${config.server.port}`
                )
            )
        }
    )
}

start();
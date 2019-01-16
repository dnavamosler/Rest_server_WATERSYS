/*=============================
        DEPENDENCIAS
================================*/
const mongoose = require('mongoose')
var express = require('express')
var bodyParser = require('body-parser')

/* Configuracion general del servicio */
require('./config/config')

/* Conexion a base de datos */
mongoose.connect('mongodb://localhost:27017/water-sys', (err , res) => {
    if(err) return console.log(err)
    
    console.log(`Base de datos ONLINE!!`)
});


const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.listen(process.env.PORT, () => {
    console.log(`escuchando en el puerto ${process.env.PORT}!!`)
})
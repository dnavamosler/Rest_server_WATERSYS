/*=============================
        DEPENDENCIAS
================================*/

/* Configuracion general del servicio */
require('./config/config')

const mongoose = require('mongoose')
var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')

/* instancia de express */
const app = express()

app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

/* importacion de rutas*/
app.use( require('./routes/index'))

/* Conexion a base de datos */
mongoose.connect(process.env.URL_DB, (err , res) => {
    if(err) throw(err)

    console.log(`Base de datos ONLINE!!`)
});

app.listen(process.env.PORT, () => {
    console.log(`escuchando en el puerto ${process.env.PORT}!!`)
})

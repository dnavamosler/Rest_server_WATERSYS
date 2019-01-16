/*=============================
        DEPENDENCIAS
================================*/

/* Configuracion general del servicio */
require('./config/config')

const mongoose = require('mongoose')
var express = require('express')
var bodyParser = require('body-parser')

/* instancia de express */
const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

/* importacion de rutas POSTERIORMENTE SERA MODIFICADO */
app.use( require('./routes/client'))
app.use( require('./routes/user'))
app.use( require('./routes/reporte'))

/* Conexion a base de datos */
mongoose.connect('mongodb://localhost:27017/water-sys', (err , res) => {
    if(err) throw(err)
    
    console.log(`Base de datos ONLINE!!`)
});

app.listen(process.env.PORT, () => {
    console.log(`escuchando en el puerto ${process.env.PORT}!!`)
})
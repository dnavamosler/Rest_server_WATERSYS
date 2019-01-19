/*=============================
        DEPENDENCIAS
================================*/

/* Configuracion general del servicio */
require('./config/config')

const mongoose = require('mongoose')
var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors');



/* instancia de express */
const app = express()

// use it before all route definitions
app.use(cors({origin: 'https://water-sys-front.herokuapp.com/'}));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

/* importacion de rutas*/
app.use( require('./routes/index'))

// app.use(function (req, res, next) {

//     // Website you wish to allow to connect
//     res.setHeader('Access-Control-Allow-Origin', 'https://water-sys-front.herokuapp.com');

//     // Request methods you wish to allow
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

//     // Request headers you wish to allow
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

//     // Set to true if you need the website to include cookies in the requests sent
//     // to the API (e.g. in case you use sessions)
//     res.setHeader('Access-Control-Allow-Credentials', true);

//     // Pass to next layer of middleware
//     next();
// });

/* Conexion a base de datos */
mongoose.connect(process.env.URL_DB, (err , res) => {
    if(err) throw(err)

    console.log(`Base de datos ONLINE!!`)
});

app.listen(process.env.PORT, () => {
    console.log(`escuchando en el puerto ${process.env.PORT}!!`)
})

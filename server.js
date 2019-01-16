/*=============================
        DEPENDENCIAS
================================*/

var express = require('express')
var bodyParser = require('body-parser')
require('./config/config')

var app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.get('/user', function(req, res) {
    res.json('get user')
})


app.post('/user', function(req, res) {
    let body = req.body

    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: "Es necesario mandar el nombre"
        })
    } else {
        res.json({ usuario: body })
    }
})

app.put('/user/:id', function(req, res) {

    let id = req.params.id

    res.json({ id })
})

app.delete('/user', function(req, res) {

    res.send('delete user')
})


app.listen(process.env.PORT, () => {
    console.log(`escuchando en el puerto ${process.env.PORT}!!`)
})
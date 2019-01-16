/* Importacion de dependencias */

const express = require('express')
const mongoose = require('mongoose')

/* instancia de express */
const app = express()

/* creacion de esquemas con mongoose */
let schema = mongoose.Schema


/* instancia de esquema 
    para usuarios */
let usuarioSchema = new Schema({
    nombre:{
        type: string,
        required: [true,'El nombre de usuario es requerido'] 
    },
    apellido:{
        type: string,
        required: [true, 'El apellido de usuario es requerido']
    }
})


/* metodo get para obtencion de usuarios */
app.get('/user', function(req, res) {
    res.json('get user')
})

/* metodo post para creacion de usuarios */
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

/* metodo put para actualizacion de usuarios */
app.put('/user/:id', function(req, res) {

    let id = req.params.id

    res.json({ id })
})


/* metodo delete para borrado de usuarios */
app.delete('/user', function(req, res) {

    res.send('delete user')
})

module.exports = mongoose.model('Usuario', usuarioSchema)
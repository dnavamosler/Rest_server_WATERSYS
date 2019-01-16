/* Importacion de dependencias */

const express = require('express')
const Usuario = require('../models/usuario')

/* instancia de express */
const app = express()




/* metodo get para obtencion de usuarios */
// app.get('/user', function(req, res) {
//     res.json('get user')
// })

/* metodo post para creacion de usuarios */
app.post('/user', function(req, res) {

    let body = req.body
    
    /* crear el modelo del usuario */
    let usuario = new Usuario({
        nombre : body.nombre,
        apellido : body.apellido
    })

    usuario.save((err, usuarioDB) => {
        if(err) {
            /* retornar un error en caso de que el request sea erroneo */
            return res.status(400).json({
                ok : false,
                err
            })
        }

        /* responder el request */

        res.json({
            ok: true,
            usuario : usuarioDB
        })
    })

})

/* metodo put para actualizacion de usuarios */
/* app.put('/user/:id', function(req, res) {

    let id = req.params.id

    res.json({ id })
}) */


/* metodo delete para borrado de usuarios */
/* app.delete('/user', function(req, res) {

    res.send('delete user')
})
 */

 module.exports = app

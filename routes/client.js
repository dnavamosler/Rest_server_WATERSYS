/* Importacion de dependencias */

const express = require('express')
const Cliente = require('../models/client')

/* instancia de express */
const app = express()




/* metodo get para obtencion de clientes */
// app.get('/user', function(req, res) {
//     res.json('get user')
// })

/* metodo post para creacion de clientes */
app.post('/user', function(req, res) {

    let body = req.body
    
    /* crear el modelo del cliente */
    let cliente = new Cliente({
        name:{
            first_name : body.first_name,
            last_name : body.last_name},
        address :{
            city : body.city,
            street: body.street,
            number: body.number
        },
        dni : body.dni

        
    })

    cliente.save((err, clienteDB) => {
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
            cliente : clienteDB
        })
    })

})

/* metodo put para actualizacion de clientes */

 app.put('/user', function(req, res) {

    // let id = req.params.id esto es para pasar parametros por id

    res.json({ id })
}) 


/* metodo delete para borrado de clientes */
/* app.delete('/user', function(req, res) {

    res.send('delete user')
})
 */

 module.exports = app

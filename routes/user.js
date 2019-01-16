/* Importacion de dependencias */

const express = require('express')
const User = require('../models/user')
const bcrypt = require('bcryptjs');

/* instancia de express */
const app = express()




/* metodo get para obtencion de users */
// app.get('/user', function(req, res) {
//     res.json('get user')
// })


/* metodo post para creacion de users */
app.post('/user', function(req, res) {

    let body = req.body
    
    /* crear el modelo del user */
    let user = new User({
        name:{
            first_name : body.first_name,
            last_name : body.last_name},
        phone : body.phone,
        nickname : body.nickname,
        password : bcrypt.hashSync(body.password , 10 ) /* Codifica el password */     
    })

    user.save((err, userDB) => {
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
            user : userDB
        })
    })

})

/* metodo put para actualizacion de users */

 /* app.put('/user', function(req, res) {

    // let id = req.params.id esto es para pasar parametros por id

    res.json({ id })
})  */


/* metodo delete para borrado de users */
/* app.delete('/user', function(req, res) {

    res.send('delete user')
})
 */

 module.exports = app

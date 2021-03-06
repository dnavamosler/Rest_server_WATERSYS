/* Importacion de dependencias */

const express = require('express')
const User = require('../models/user')
const bcrypt = require('bcryptjs');
const _ = require('underscore');

/* instancia de express */
const app = express()

const {verificaToken , verificaRol} = require('../middleware/autenticacion')


/* metodo get para obtencion de users */
app.get('/user',[verificaToken,verificaRol]  ,function(req, res) {

    
    let desde = req.query.desde || 0;
    desde = Number(desde);

    let limite = req.query.limite || 5;
    limite = Number(limite);

    User.find({state : true})
        .skip(desde)
        // .limit(limite)
        .exec((err, usuarios) => {

            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }

            User.count({state : true}, (err, conteo) => {
                res.json({
                    ok: true,
                    usuarios,
                    cuantos : conteo
                })
            })
        })
})


/* metodo post para creacion de users */
app.post('/user', [verificaToken,verificaRol] ,function(req, res) {

    let body = req.body
    
    /* crear el modelo del user */
    let user = new User({
        name:{
            first_name : body.first_name,
            last_name : body.last_name},
        informacion:{ phone: body.phone},
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

 app.put('/user/:id',[verificaToken,verificaRol] ,function(req, res) {
    let id = req.params.id
   
    User.findByIdAndUpdate(id ,
        {
            $set: {
                informacion:{
                    phone : req.body.phone} 
                }
        }
    , { new: true, runValidators: true}, (err, usuarioDB) => {
    
        if(err) {
            return res.status(400).json({
                ok:false,
                err
            })
        }
        res.json({
            ok: true,
            usuario: usuarioDB
        });

    })
    
}) 


/* metodo delete para borrado de users */
app.delete('/user/:id',  [verificaToken,verificaRol] ,function(req, res) {
    let id = req.params.id
    let body = req.body

    let cambiarEstado ={
        state : false
    }

    User.findByIdAndUpdate(id, cambiarEstado , {new:true}, (err , usuarioDb ) => {
        if(err){
            return res.status(400).json({
                ok: false,
                err
            })
        }
        res.json({
            ok: true,
            usuario: usuarioDb
        })
    })
})


 module.exports = app

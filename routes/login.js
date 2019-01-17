/* DEPENDENCIAS */
const express = require('express')
const User = require('../models/user')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

const app = express()

   app.post('/login',(req , res) =>{

    let body = req.body

    User.findOne({nickname : body.nickname}, (err, userDB) =>{
            /* Validar error interno de la BD*/
            if(err){
                return res.status(500).json({
                    ok : false,
                    err
                })
            }

            /* Validar que existe el usuario */
            if(!userDB){
                return res.status(400).json({
                    ok: false,
                    err : 'El (usuario) o la contraseña es incorrecto.'
                })
            }

            /* Validar que la contrasenia es correcta */
            if(!bcrypt.compareSync(body.password,userDB.password)){
                return res.status(400).json({
                    ok: false,
                    err: 'El usuario o la (contraseña) es incorrecto.'
                })
            }

            /* Levantar JWT */
            let token = jwt.sign({
                user : userDB
            },process.env.SEED_TOKEN, {expiresIn : process.env.CADUCIDAD_TOKEN })

            /* Enviar la respuesta */
            res.json({
                ok : true,
                usuario : userDB,
                token 
            })
    })


})


    module.exports = app
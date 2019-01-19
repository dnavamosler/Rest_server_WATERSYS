/* Importacion de dependencias */
const express = require('express')
const Menu = require('../models/menu')

/* instancia de express */
const app = express()

/* metodo get para obtencion de users */
app.get('/menu', function(req, res) {

    Menu.find({rol: req.headers.rol}, (err, data) =>{
        console.log(req.headers)
        if(err)
            return res.status(400).json({
                ok: false,
                err: 'ocurrio un error interno'
            })

            

            res.json({
                ok:true,
                data : data[0].options
            })
        
    })

                

  });

 module.exports = app

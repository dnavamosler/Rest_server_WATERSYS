/* importacion de dependencias */

const express = require('express')
const Reporte = require('../models/reporte')

/* Instancia de express */
const app = express()

/* metodo post para reportes */
app.post('/reporte', (req, res) => {

    let body = req.body

    /* crear el modelo de reporte */
    let reporte = new Reporte({
        date : new Date(),
        category : body.category,
        id_cliente: body.id_cliente,
        id_usuario: body.id_usuario,
        comentario: body.comentario,
        cant_bidones : body.cant_bidones,
        monto_abodo : body.monto_abonado,
        antiguo_plan : body.antiguo_plan,
        nuevo_plan : body.nuevo_plan
    })

    reporte.save((err, reporteDB) => {
        if(err){
            /* Revisar el error */
            return res.status(400).json({
                ok: false,
                err
            })
        }

        /* Responder el request */

        res.json({
            // ok: true,
            reporte : reporteDB
        })
    })
})

module.exports = app


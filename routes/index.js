/* ROUTES */

const express = require('express')

const app = express()

app.use( require('./client'))
app.use( require('./user'))
app.use( require('./reporte'))
app.use( require('./login'))
app.use( require('./menu'))

module.exports = app
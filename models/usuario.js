/*  Dependencias */
const mongoose = require('mongoose')

/* creacion de esquemas con mongoose */
let Schema = mongoose.Schema


/* instancia de esquema 
    para usuarios */
let usuarioSchema = new Schema({
    nombre:{
        type: String,
        required: [true,'El nombre de usuario es requerido'] 
    },
    apellido:{
        type: String,
        required: [true, 'El apellido de usuario es requerido']
    }
})

module.exports = mongoose.model('Usuario', usuarioSchema)
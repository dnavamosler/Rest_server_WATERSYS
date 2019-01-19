/* Importacion de dependencias */

const mongoose = require('mongoose')

/* creacion de esquemas con mongoose */
let Schema = mongoose.Schema

/* Roles validos */
let rolesValidos = {
    values: ['ADMIN_ROL','USER_ROL'],
    message : '{VALUE}, no es un rol valido.'
}

/* instancia de esquema 
    para menus */

let menuSchema = new Schema({
    rol:{
        type:String,
        required:true,
        enum : rolesValidos
    },
    options:{
        type: Array,
        required:true
    }
})


module.exports = mongoose.model('Menu', menuSchema)





/*  Dependencias */
const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

/* creacion de esquemas con mongoose */
let Schema = mongoose.Schema

/* Roles validos */
let rolesValidos = {
    values: ['ADMIN_ROL','USER_ROL'],
    message : '{VALUE}, no es un rol valido.'
}

/* instancia de esquema 
    para users */
let userSchema = new Schema({
    name : [{                                    /* Nombre y apellido del user */
        first_name : 
            { type: String, required: true},
        last_name : 
        {type: String, required: true}
    }],
    informacion:[
        {phone: {type: String, required: true}}
    ], /* numero de telefono */
    nickname: {type: String, required: true, unique: true}, /* nickname unico */
    password : {type: String, required: true}, /* password encriptado */
    rol : { type: String, default : 'USER_ROL', enum : rolesValidos}    /* rol en la palicacion */,
    state: {type: Boolean, default : true}            /* estado activo, si cancela el plan y su deuda total es 0, pasa a falso y no se muestra mas. */
})

userSchema.plugin( uniqueValidator , { message : '{PATH} debe ser unico.'})

    userSchema.methods.toJSON = function(){
        let user = this         /* obtiene el this actual */
        let userObject = user.toObject()        /* declara el esquema como objeto */
        delete userObject.password      /* elimina el password */
        return userObject
    }

module.exports = mongoose.model('user', userSchema)
/* dependencias */
const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

/*  Creacion de esquemas con mongoose */

let Schema = mongoose.Schema

/* Category Validas */
let categoryValid = {
    values: ['REMITO','ABONO','RETIRO','CAMBIO_PLAN'],
    message : '{VALUE}, no es un rol valido.'
}

/* Instancia de esquemas para Reportes */

let reporteSchema = new Schema({

    
    /* Se guarda la categoria de 4 posibles opciones
        *REMITO =>  se ingresa una cantidad de bidones
        *ABONO  =>  se ingresa una cantidad de dinero
        *RETIRO =>  Se manda un status al usuario, se condiciona con deuda 0
        *CAMBIO_PLAN   => se plantean dos planes

        Al realizar un reporte, se debe alterar el registro de usuario con la nueva informacion.
        */

        /* Se guarda la fecha en el momento que se realizo el post */
    date: {
        type: Date,
        required: true
    },
    category : {
        type: String,
        required: true,
        enum : categoryValid
    },
    cant_bidones : {
        type : Number,
        default: 0
    },
    id_cliente : {
        type : Schema.Types.ObjectId,
        required:true
    },
    id_usuario : {
        type: Schema.Types.ObjectId,
        required : true
    },
    monto_abonado : {
        type : Number,
        default : 0 
    },
    comentario : {
        type: String,
        required : false
    },
    antiguo_plan : {
        type : String,
        required: false
    },
    nuevo_plan : {
        type : String,
        required: false
    }
})


/* Validar campos requeridos */
reporteSchema.plugin( uniqueValidator, { message : '{PATH} debe ser unico.'})

/* Exportar modulo */
module.exports = mongoose.model('reporte', reporteSchema)
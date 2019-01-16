/*  Dependencias */
const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

/* creacion de esquemas con mongoose */
let Schema = mongoose.Schema


/* instancia de esquema 
    para clientes */
let clienteSchema = new Schema({
    name : [{                                    /* Nombre y apellido del cliente */
        first_name : 
            { type: String, required: true},
        last_name : 
        {type: String, required: true}
    }],
    address : [{                                   /* Direccion del cliente */
        city : 
            {type : String, required: true},
        street: 
            {type: String, required: true},
        number : 
            {type : Number, required: true}
    }],
    phone : {type: String, requerid: true},
    dni : {type: Number,unique : true, requerid: true} /* Solo puede haber un dni */
    ,
    // plan_id :                                       /* id, del plan que va a tener */
    //     {type : Schema.Types.ObjectId, required: true},
    meses_deuda : [{                                /* deuda por defecto en 0 */
        cant_meses : {type: Number, default: 0},
        meses : {type : Array, default: 0}
    }],     
    bidones : [{                                    /* Bidones cantidad y deuda que acumula, hace falta un valor constante para el precio */
        cant_bidones:{type: Number, default: 0},
        deuda: {type: Number, default: 0}
    }],
    email: {type: String, required: false},         /* Correo electronico */
    state: {type: Boolean, default : true}            /* estado activo, si cancela el plan y su deuda total es 0, pasa a falso y no se muestra mas. */
})

clienteSchema.plugin( uniqueValidator , { message : '{PATH} debe ser unico.'})

module.exports = mongoose.model('Cliente', clienteSchema)
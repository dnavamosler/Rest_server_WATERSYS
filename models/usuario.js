/* creacion de esquemas con mongoose */
let schema = mongoose.Schema


/* instancia de esquema 
    para usuarios */
let usuarioSchema = new Schema({
    nombre:{
        type: string,
        required: [true,'El nombre de usuario es requerido'] 
    },
    apellido:{
        type: string,
        required: [true, 'El apellido de usuario es requerido']
    }
})

module.exports = mongoose.model('Usuario', usuarioSchema)
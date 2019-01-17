const jwt = require('jsonwebtoken')

/* VERIFICAR EL TOKEN */
let verificaToken = (req, res , next) =>{

    /* El token lo obtenemos del head */
    let token = req.get('token')
    
    jwt.verify(token, process.env.SEED_TOKEN, (err, decoded) => {
        
        if(err)
            return res.status(401).json({
                ok: false,
                err
            })

        req.usuario = decoded.user
        next()
    })

}

let verificaRol =  (req, res , next) => {

    let usuario = req.usuario
    
    if(usuario.rol != 'ADMIN_ROL')
        res.json({
            ok : false,
            err : 'No posee permisos para realizar esta accion.'
        })
    
    next()
}


module.exports = {
    verificaToken,
    verificaRol
}
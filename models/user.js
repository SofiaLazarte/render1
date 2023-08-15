//carpeta para crear usuarios
const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
 //cada campo son los imput que tendra nuestros registros. validacion en el front y back. creamos un modelo
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true, 
    
    },
    possword: {
        type: String,
        require: true,
    },


})

module.exports = mongoose.model('UsuarioCreado', UserSchema);
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const esquema = new Schema({
    nombre: {
        type: String,
        required: [true, "Falta el campo nombre"]
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    clave: {
        type: String,
        required: true
    },
    rol: {
        type: String,
        enum: ['admin', 'deportista', 'profesor'],
        default: 'deportista'
    },
    tel: Number,
    created: {
        type: Date,
        default: Date.now
    }
});

const Usuario = mongoose.model('Usuario', esquema);

export default Usuario;
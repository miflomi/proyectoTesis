import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const esquema = new Schema({
    nombre: String,
    apellido: String,
    edad: Number,
    categoria: String,
    profesor: String,
    grupo: Number
});

const Equipo = mongoose.model('Equipo', esquema);

export default Equipo;
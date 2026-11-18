import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const esquema = new Schema({
    nombre: {
        type: String,
        required: [true, "Falta el campo nombre"]
    },
    categoria: {
        type: String,
        required: [true, "Falta el campo categoria"]
    },
    profesor: String,
    dias: String,
    horario: String,
    costo: Number,
    imagen: {
    type: String,
    default: './public/img/cursoNuevo.png' // Opcional: una imagen base si el usuario no sube nada
  }
});

const Actividad = mongoose.model('Actividad', esquema);

export default Actividad;
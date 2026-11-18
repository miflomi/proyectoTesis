import Espacio from "../models/EspacioModel.js";
const crearEspacio = async ( request, response) =>{
    const body = request.body;
    if( !body.nombre || !body.cupo || !body.dias || !body.horario){
        response.status(401).json( {msg: "Faltan campos obligatorios"});
        return;
    }

    try {
        const nuevoEspacio =  new Espacio(body);
        const espacio = await nuevoEspacio.save();

    response.json({ msg: "Espacio creado", data: espacio});
    } catch (error) {
        console.error({error})
        response.status(500).json({msg: "Error en el servidor"})
    }

    
}

const listarEspacios = async ( request, response) =>{
    const espacios = await Espacio.find();
    response.json( {data: espacios });
}

const getEspById = async ( request, response) => {
    const id = request.params.id;
    const esp = await Espacio.findById(id);
    if( esp){
        response.status(200).json( {data: esp});
    } else {
        response.status(404).json({ msg: 'Espacio no Encontrado'});
    }
}

const deleteEspById = async ( request, response) => {
    const id = request.params.id;
    const esp = await Espacio.findByIdAndDelete(id);
    if( esp){
        response.status(200).json( {data: esp});
    } else {
        response.status(404).json({ msg: 'Espacio no Encontrado'});
    }
}
const updeteEspById = async ( request, response) => {
    const id = request.params.id;
    const body = request.body;

    const esp = await Espacio.findByIdAndUpdate(id, body);
    if( esp){
        response.status(200).json( {data: esp});
    } else {
        response.status(404).json({ msg: 'Espacio no Encontrado'});
    }
}


export { crearEspacio, listarEspacios, getEspById, deleteEspById, updeteEspById };

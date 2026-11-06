import Equipo from "../models/EquipoModel.js";
const crearEquipo = async ( request, response) =>{
    const body = request.body;
    const nuevoEquipo =  new Equipo(body);
    const equipo = await nuevoEquipo.save();

    response.json({ msg: "Equipo creada", data: equipo});
}

const listarEquipos = async ( request, response) =>{
    const equipos = await Equipo.find();
    response.json( {data: equipos });
}

const getEquipoById = async ( request, response) => {
    const id = request.params.id;
    const equipo = await Equipo.findById(id);
    if( equipo){
        response.status(200).json( {data: equipo});
    } else {
        response.status(404).json({ msg: 'Equipo no Encontrado'});
    }
}

const deleteEquipoById = async ( request, response) => {
    const id = request.params.id;
    const equipo = await Equipo.findByIdAndDelete(id);
    if( equipo){
        response.status(200).json( {data: equipo});
    } else {
        response.status(404).json({ msg: 'Equipo no Encontrado'});
    }
}
const updeteEquipoById = async ( request, response) => {
    const id = request.params.id;
    const body = request.body;

    const equipo = await Equipo.findByIdAndUpdate(id, body);
    if( equipo){
        response.status(200).json( {data: equipo});
    } else {
        response.status(404).json({ msg: 'Equipo no Encontrado'});
    }
}


export { crearEquipo, listarEquipos, getEquipoById, deleteEquipoById, updeteEquipoById };

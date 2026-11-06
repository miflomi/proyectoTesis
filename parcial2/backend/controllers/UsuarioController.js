import Usuario from "../models/UsuarioModel.js";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const SECRET_KEY = process.env.SECRET_KEY;

const crearUsuario = async ( request, response) =>{
    const {nombre, email, clave, tel} = request.body;

    if ( !nombre || !email || !clave || !tel ) {
        response.status(401).json({ msg: "Faltan campos obligatorios"});
        return;
    }

     const user = await Usuario.findOne(
        { email }
    );
    if (user) {
        console.log('Email registrado');
        response.status(400).json({msg: "El email ya se encuentra registrado"})
        return;
    }

    const hash = await bcrypt.hash(clave,10);
    const usuarioDatos = {
        nombre,
        email,
        clave: hash,
        tel
    }

    const nuevoUsuario =  new Usuario(usuarioDatos);
    const usuario = await nuevoUsuario.save();

    response.json({ msg: "Usuario creado", data: usuario});
}

const listarUsuarios = async ( request, response) =>{
    const usuarios = await Usuario.find();
    response.json( {data: usuarios });
}

const getUserById = async ( request, response) => {
    const id = request.params.id;
    const user = await Usuario.findById(id);
    if( user){
        response.status(200).json( {data: user});
    } else {
        response.status(404).json({ msg: 'Usuario no Encontrado'});
    }
}

const deleteUserById = async ( request, response) => {
    const id = request.params.id;
    const user = await Usuario.findByIdAndDelete(id);
    if( user){
        response.status(200).json( {data: user});
    } else {
        response.status(404).json({ msg: 'Usuario no Encontrado'});
    }
}
const updeteUserById = async ( request, response) => {
    const id = request.params.id;
    const body = request.body;

    const user = await Usuario.findByIdAndUpdate(id, body);
    if( user){
        response.status(200).json( {data: user});
    } else {
        response.status(404).json({ msg: 'Usuario no Encontrado'});
    }
}

const login = async(request, response) => {
    try {
        const { email, clave } = request.body;
        const usuario = await Usuario.findOne({email});
        if(!usuario){
            response.status(404).json({msg:'El email no existe'});
            return;
        }
        const status = await bcrypt.compare(clave, usuario.clave);
        if( !status){
            response.status(404).json({msg: 'Clave invalida'});
            return;
        }
        const payload = {
            id: usuario._id,
            nombre: usuario.nombre
        }
        const jwt = jsonwebtoken.sign( payload, SECRET_KEY, { expiresIn: '1h'} );
        response.json({msg: 'Credenciales correctas', data: jwt});
    } catch (error) {
        console.error(error);
        response.status(500).json({msg: 'Tenemos un error en el servidor'});
    }
}

export { crearUsuario, listarUsuarios, getUserById, deleteUserById, updeteUserById, login };

import express from 'express';
import { 
        crearEspacio, 
        listarEspacios, 
        getEspById,
        deleteEspById,
        updeteEspById 
    } from '../controllers/EspacioController.js';
import { validarJWT } from '../middlewares/auth.js';
const router = express.Router();

router.get('/', listarEspacios);
router.get('/:id', getEspById);
router.delete('/:id', validarJWT, deleteEspById);
router.put('/:id', validarJWT, updeteEspById);
router.post('/', validarJWT, crearEspacio);

export default router;
import express from 'express';
import { 
        crearActividad, 
        listarActividades, 
        getActById,
        deleteActById,
        updeteActById 
    } from '../controllers/ActividadController.js';
import { validarJWT } from '../middlewares/auth.js';
const router = express.Router();

router.get('/', listarActividades);
router.get('/:id', getActById);
router.delete('/:id', validarJWT, deleteActById);
router.put('/:id', validarJWT, updeteActById);
router.post('/', validarJWT, crearActividad);

export default router;
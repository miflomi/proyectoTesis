import express from 'express';
import { 
    crearEquipo,
    listarEquipos,
    getEquipoById,
    deleteEquipoById,
    updeteEquipoById 
    } from '../controllers/EquipoController.js';
const router = express.Router();

router.get('/', listarEquipos);
router.get('/:id', getEquipoById);
router.delete('/:id', deleteEquipoById);
router.put('/:id', updeteEquipoById);
router.post('/', crearEquipo);

export default router;
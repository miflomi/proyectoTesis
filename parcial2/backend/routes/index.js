import usuarioRuta from './UsuarioRouter.js';
import actividadRuta from './ActividadRouter.js';
import equipoRuta from './EquipoRouter.js';
import espacioRuta from './EspacioRouter.js';

const routerAPI = ( app ) =>{
    app.use('/api/usuarios', usuarioRuta);
    app.use('/api/actividades', actividadRuta);
    app.use('/api/equipos', equipoRuta);
    app.use('/api/espacios', espacioRuta);
}
export default routerAPI;
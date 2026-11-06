import usuarioRuta from './UsuarioRouter.js';
import actividadRuta from './ActividadRouter.js';
import equipoRuta from './EquipoRouter.js';

const routerAPI = ( app ) =>{
    app.use('/api/usuarios', usuarioRuta);
    app.use('/api/actividades', actividadRuta);
    app.use('/api/equipos', equipoRuta);

}
export default routerAPI;
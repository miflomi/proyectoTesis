import { useState, useEffect, useContext } from 'react'
import Actividad from '../components/Actividad'
import Actividades from '../components/Actividades'
import { AuthContext  } from '../context/AuthContext'
import SubirImagen from '../components/subirImg'

const Home = () => {

      const endPoint = 'https://apiclub.onrender.com/api/actividades';
      const { token } = useContext( AuthContext );

      console.log(token)

      useEffect( () => {
        const option = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      }

        fetch(endPoint, option).then(resp => resp.json() )
        .then( json => {
        console.log(json);
/*         if( json.msg != 'Ok'){
          setActividades( []);
        } else {
        setActividades(json.data)
        } */
        setActividades(json.data)
        }).catch(error => {
          console.error(error);
          alert('Error con el Servidor')
        })

      }, [])
    
    
      const [ actividad, setActividad] = useState({nombre:'', categoria:'', profesor:'', dias:'', horario:'', costo:'', imagen:''});
      const [ actividades, setActividades] = useState([]);
    
      const onChange = (event) => {
        const { name, value } = event.target;
      setActividad( (a) => ({ ...a, [name]: value}));
       }
    
      const enviarSubmit = ( event ) => {
        event.preventDefault();
        const nombre = actividad.nombre;
        const categoria = actividad.categoria;
        const profesor = actividad.profesor;
        const dias = actividad.dias;
        const horario = actividad.horario;
        const costo = actividad.costo;
        const imagen = actividad.imagen;

      const config = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(actividad)
      }
    
      fetch(endPoint, config).then(resp => resp.json())
      .then(json => {
        // console.log(json);
        const _id = json.data._id;
        const nueva = {_id, nombre, categoria, profesor, dias, horario, costo, imagen};
    
        setActividades([ ...actividades, nueva]);
        setActividad({nombre:'', categoria:'', profesor:'', dias:'', horario:'', costo:'', imagen:''});
        console.table(actividades);
        console.log(nueva);
    
    
    
      }).catch(error => {
        console.error(error);
        alert('Error del Servidor al guardar la tarea')
      })
    
    }

    return(
              <main>
                <h1>Cursos</h1>
        <form className='register' onSubmit={enviarSubmit}>
          <input
          onChange={ onChange }
          value={actividad.nombre}
          type="text"
          name="nombre"
          placeholder="Nueva Actividad"
           />
           <input
          onChange={ onChange}
          value={actividad.categoria}
          type="text"
          name="categoria"
          placeholder="Categoria"
           />
           <input
          onChange={ onChange}
          value={actividad.profesor}
          type="text"
          name="profesor"
          placeholder="Profesor/a"
           />
           <input
          onChange={ onChange}
          value={actividad.dias}
          type="text"
          name="dias"
          placeholder="Días"
           />
           <input
          onChange={ onChange}
          value={actividad.horario}
          type="number"
          name="horario"
          placeholder="Horario"
           />
           <input
          onChange={ onChange}
          value={actividad.costo}
          type="number"
          name="costo"
          placeholder="Arancel"
           />
           <SubirImagen />
           <button type="submit">Crear Actividad</button>
           
        </form>
        <Actividades>
          {
          actividades.map( item => <Actividad key={item._id} nombre={item.nombre} categoria={item.categoria} profesor={item.profesor} dias={item.dias} horario={item.horario} costo={item.costo} imagen={item.imagen}/>)
          }
          
        </Actividades>

      </main>
    )
}

export default Home
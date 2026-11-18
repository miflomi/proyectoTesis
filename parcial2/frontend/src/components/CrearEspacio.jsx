import { useState, useEffect, useContext } from 'react'
import { Table } from 'react-bootstrap'
import Espacio from '../components/Espacio'
import Espacios from '../components/Espacios'
import { AuthContext  } from '../context/AuthContext'
import SubirImagen from '../components/SubirImg.jsx'

const CrearEspacio = () => {
    const endPoint = 'https://apiclub.onrender.com/api/espacios';
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

        setEspacios(json.data)
        }).catch(error => {
          console.error(error);
          alert('Error con el Servidor')
        })

      }, [])
    
    
      const [ espacio, setEspacio] = useState({nombre:'', cupo:'', dias:'', horario:'', recursos:'', imagen:''});
      const [ espacios, setEspacios] = useState([]);
    
      const onChange = (event) => {
        const { name, value } = event.target;
      setEspacio( (a) => ({ ...a, [name]: value}));
       }
    
      const enviarSubmit = ( event ) => {
        event.preventDefault();
        const nombre = espacio.nombre;
        const cupo = espacio.cupo;
        const dias = espacio.dias;
        const horario = espacio.horario;
        const recursos = espacio.recursos;
        const imagen = espacio.imagen;

      const config = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(espacio)
      }
    
      fetch(endPoint, config).then(resp => resp.json())
      .then(json => {
        // console.log(json);
        const _id = json.data._id;
        const nueva = {_id, nombre, cupo, dias, horario, recursos, imagen};
    
        setEspacios([ ...espacios, nueva]);
        setEspacio({nombre:'', cupo:'', dias:'', horario:'', recursos:'', imagen:''});
        console.table(espacios);
        console.log(nueva);
    
    
    
      }).catch(error => {
        console.error(error);
        alert('Error del Servidor al guardar la tarea')
      })
    
    }

    return(
              <main>
                <h1>Espacios</h1>
        <form className='register actList' onSubmit={enviarSubmit}>
          <input
          onChange={ onChange }
          value={espacio.nombre}
          type="text"
          name="nombre"
          placeholder="Nuevo Espacio"
           />
           <input
          onChange={ onChange}
          value={espacio.cupo}
          type="number"
          name="cupo"
          placeholder="Cupo"
           />
           <input
          onChange={ onChange}
          value={espacio.dias}
          type="text"
          name="dias"
          placeholder="Días"
           />
           <input
          onChange={ onChange}
          value={espacio.horario}
          type="number"
          name="horario"
          placeholder="Horario"
           />
           <input
          onChange={ onChange}
          value={espacio.recursos}
          type="text"
          name="recursos"
          placeholder="Recursos"
           />
           <SubirImagen></SubirImagen>
           
           <button type="submit">Crear Espacio</button>
           
           
        </form>
        <Espacios>
        <Table className="actList">
          <thead>
            <tr >
              <th>Imagen</th>
              <th>Nombre</th>
              <th>Cupo</th>
              <th>Días</th>
              <th>Horario</th>
              <th>Recursos</th>
            </tr>
            </thead>
        <tbody>

          {
          espacios.map( item => <Espacio key={item._id} imagen={item.imagen} nombre={item.nombre} cupo={item.cupo} dias={item.dias} horario={item.horario} recursos={item.recursos}/>)
          }
     
          </tbody>
          </Table>
          </Espacios>
      </main>
    )
}

export default CrearEspacio
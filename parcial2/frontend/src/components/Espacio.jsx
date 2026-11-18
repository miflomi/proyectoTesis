const Espacio = ({id, imagen, nombre, cupo, dias, horario, recursos}) => {
    return (

            <>
            <tr >
            <td><img src={imagen} alt={nombre} width="50" /></td>
            <td>{nombre}</td>
            <td>{cupo}</td>
            <td>{dias}</td>
            <td>{horario}</td>
            <td>{recursos}</td>
            
            <td><button className="btninsc" type="submit">Agregar</button></td>
          </tr>
          </>

    )
}

export default Espacio
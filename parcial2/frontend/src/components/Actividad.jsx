const Actividad = ({id, imagen, nombre, categoria, profesor, dias, horario, costo}) => {
    return (

            <>
            <tr >
            <td><img src={imagen} alt={nombre} width="50" /></td>
            <td>{nombre}</td>
            <td>{categoria}</td>
            <td>{profesor}</td>
            <td>{dias}</td>
            <td>{horario}</td>
            <td>$ {costo}</td>
            

            <td><button className="btninsc" type="submit">Inscribir</button></td>
          </tr>
          </>

    )
}

export default Actividad
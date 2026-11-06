const Actividad = ({id, nombre, categoria, profesor, dias, horario, costo, imagen}) => {
    return (
        <li className="actListli">
                    
        <div className="listAct">
            <p>{nombre} </p>
            <p>{categoria} </p>
            <p>{profesor} </p>
            <p>{dias} </p>
            <p>{horario} </p>
            <p>{costo} </p>
            <img src={imagen}/>


        <button className="btninsc" type="submit" 
          
          >Inscribir</button>
                </div>
        </li>
    )
}

export default Actividad
const Footer = ({descripcion}) => {
    const year = new Date().getFullYear();
    return (
        <footer>
            <ul>
                <li>Alumna: Mimi Flores</li>
                <li>Aplicaciones Híbridas</li>
                <li>Docente: Jonathan Cruz</li>     <li><p> {descripcion} | Comisión DWT4AP - {year}</p>
                </li>             
            </ul>

        </footer>
    )
}

export default Footer
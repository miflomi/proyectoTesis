import { NavLink, useNavigate } from "react-router-dom"

const NotFound = () => {

    return(
        <main>
            <h1>Error 404 - NOT FOUND </h1>
            <NavLink to='/'>Ir a la página principal</NavLink>
            
        </main>
    )
}

export default NotFound
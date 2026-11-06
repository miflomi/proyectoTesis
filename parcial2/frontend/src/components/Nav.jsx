// import miLogo from '../../public/imagenes/logo.png';
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";


const Nav = () => {
    const navigate = useNavigate();

    const { usuario,logout } = useContext( AuthContext );

    const handleLogout = () => {
        if (confirm('¿Cerrar Sesión?')) {
          logout()
          navigate('/login');
        }
    }

    return (
        <nav className="nav-user">
          {/* <img src="../../public/imagenes/logoDesk.png" alt="logo" /> */}
          <img
          src="./Logos/logoDesk.svg"
        srcSet="./Logos/logoMin.svg 30w, ./public/Logos/logoTablet.svg 50w, ./public/Logos/logoDesk.png 70w"
        sizes="(max-width: 480px) 30px, (max-width: 768px) 50px, 70px"
        alt="Logo responsivo"
          style={{ width: '100%', maxWidth: '80px', height: 'auto' }}
            />
            <h1>CMiClub</h1>
            <div className="user-info">
                <p>{ usuario?.nombre } </p>
            <div className="user-img"></div>

    <ul>
        <li>
          <NavLink to='/'>Inicio</NavLink>
        </li>
        <li>
          <NavLink to='/actividades'>Actividades</NavLink>
        </li>
        {
          !usuario ? (
            <>
          <li>
          <NavLink to='/login'>Login</NavLink>
        </li>
        <li>
          <NavLink to='/register'>Registro</NavLink>
        </li>
        </>
        ) : <>
        <button onClick={ () => handleLogout() } type="button">Cerrar sesión</button>
        </>
        }
      </ul>

        </div>
        </nav>
    )
}

export default Nav
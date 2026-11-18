// import miLogo from '../../public/imagenes/logo.png';
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap'



const Navig = () => {
    const navigate = useNavigate();

    const { usuario,logout } = useContext( AuthContext );

    const handleLogout = () => {
        if (confirm('¿Cerrar Sesión?')) {
          logout()
          navigate('/login');
        }
    }

    return (
        <Navbar expand="md" className="bg-body-tertiary">
          <Container>

          {/* <img src="../../public/imagenes/logoDesk.png" alt="logo" /> */}
          <Navbar.Brand>
          <img
          src="./Logos/logoDesk.svg"
        srcSet="./Logos/logoMin.svg 20w, ./public/Logos/logoTablet.svg 30w, ./public/Logos/logoDesk.png 50w"
        sizes="(max-width: 480px) 20px, (max-width: 768px) 30px, 50px"
        alt="Logo responsivo"
          style={{ width: '100%', maxWidth: '80px', height: 'auto' }}
            />
            <span className="px-4">C<span className="text-isologo">Mi</span>Club</span>
            </Navbar.Brand>
                    {/* <navig className="nav-user"> */}
{/*             <div className="user-info">
                <p>{ usuario?.nombre } </p>
            <div className="user-img"></div> */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto nav-user text-end">
                    <div className="user-info">
                <p>{ usuario?.nombre } </p>
            <div className="user-img"></div>
    <ul className="navbar-nav flex-column flex-md-row d-inline-flex md-auto bg-light rounded-4 text-start">
        <li>
          <NavLink to='/'>Inicio</NavLink>
        </li>
        <li>
          <NavLink to='/actividades'>Actividades</NavLink>
        </li>
        <li>
          <NavLink to='/espacios'>Espacios</NavLink>
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
        <button onClick={ () => handleLogout() } type="button" className="cerrar-sesion">Cerrar sesión</button>
        </>
        }
      </ul>

        </div>
        </Nav>
        </Navbar.Collapse>
        {/* </navig> */}
        </Container>
        </Navbar>
    )
}

export default Navig
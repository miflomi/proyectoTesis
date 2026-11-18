import { NavLink, useNavigate } from "react-router-dom"
import { useRef } from "react"; 
import { useState } from "react";

const Register = () => {

    const nameRef =  useRef();
    const emailRef =  useRef();
    const passwordRef =  useRef();
    const telRef =  useRef();

    const navigate = useNavigate();    

    const onSubmit = async (event) => {
        event.preventDefault();
        const user = {
            nombre: nameRef.current.value,
            email: emailRef.current.value,
            clave: passwordRef.current.value,
            tel: telRef.current.value
        }
        // console.log( user );

        const endPoint = 'https://apiclub.onrender.com/api/usuarios';
        const option = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        };



    const resp = await fetch(endPoint, option);
    // console.log(resp);
    const data = await resp.json();
    // console.log(data);
    navigate('/login');
    }

    return(
        <main className="container">
            <h1>Registro</h1>
            <form onSubmit={ onSubmit } className="register">

                <label htmlFor="name">Nombre</label>
                <input type="text" name="name" ref={ nameRef }/>

                <label htmlFor="email">Email</label>
                <input type="email" name="email" ref={ emailRef }/>

                <label htmlFor="password">contraseña</label>
                <input type="password" name="password" ref={ passwordRef }/>

                <label htmlFor="tel">Telefono</label>
                <input type="number" name="tel" ref={ telRef }/>

                <button type="submit">Crear una cuenta</button>
            </form>
            <div>
                <NavLink to='/login'>Ya tienes cuenta</NavLink>
            </div>
        </main>
    )
}

export default Register
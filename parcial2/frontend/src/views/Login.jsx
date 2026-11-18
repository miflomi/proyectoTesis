import { useNavigate, NavLink } from "react-router-dom"
import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
    const navigate = useNavigate();

    const [ usuario, setUsuario ] = useState({ email:'', clave:''});
    const { login } = useContext( AuthContext );

    const onChange = ( event ) => {
        const { name, value } = event.target;
        setUsuario({ ...usuario, [name]: value});
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        const endPoint = 'https://apiclub.onrender.com/api/usuarios/login';
        const option = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email:usuario.email, clave:usuario.clave})
        };
        const resp = await fetch(endPoint, option);
        console.log(resp);
        const data = await resp.json();
        console.log(data);

        if (!data.data) {
            alert('Credenciales invalidas');
            return
        }
        const jwt = data.data;
        login(usuario, jwt)
        navigate('/actividades')
    }


    return(
        <main>
            

            <form onSubmit={ onSubmit} className="login">
                <h1>Ingreso</h1>

                <label htmlFor="email">email</label>
                <input 
                onChange={ onChange}
                value={usuario.email}
                type="email"
                id="email"
                name="email" />

                <label htmlFor="clave">contraseña</label>
                <input 
                onChange={ onChange}
                value={usuario.clave}
                type="password"
                id="clave"
                name="clave"
                />

                <button type="submit">Ingresar</button>
            </form>
                <div>
                <NavLink to='/register'>¿Quieres registrarte?</NavLink>
                </div>
        </main>
    )
}

export default Login
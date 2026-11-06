import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import './App.css'
import Home from './views/Home'
import Login from './views/Login'
import Register from './views/Register'
import NotFound from './views/NotFound'
import Inicio from './views/Inicio'
import MainLayout from './components/MainLayout'
import { AuthContext, AuthProvider } from './context/AuthContext'


function App() {


  return (
    <>

    <AuthProvider>
      
      <BrowserRouter>

      <Routes>
        <Route element={ <MainLayout />} >
        <Route path='/' element={ <Inicio /> } />
        <Route path='/login' element={ <Login /> } />
        <Route path='/Actividades' element={ <Home /> } />
        <Route path='/register' element={ <Register />} />
        <Route path='*' element={ <NotFound />} />
      </Route>

      </Routes>

      </BrowserRouter>

    </AuthProvider>
    </>
  )
}

export default App

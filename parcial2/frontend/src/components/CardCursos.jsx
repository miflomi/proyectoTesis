import {Card, Container, Row, Col, Image }from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import React, {useState, useEffect } from "react";
import {NavLink } from "react-router-dom";
import Actividad from './Actividad';
// import cursoNuevo from './assets/img/cursoNuevo.png';


function CardCursos() {

    
    const [cursos, setCursos] = useState([]);
    const endPoint = 'https://apiclub.onrender.com/api/actividades';
    const maxCard = 6;

useEffect( () => {
        fetch(endPoint).then(resp => resp.json() )
        .then( json => {
        console.log(json);

        setCursos(json.data)
        }).catch(error => {
          console.error(error);
          alert('Error con el Servidor')
        })

      }, []);

    return (
        <>
        <div className='fondo1'>
        <h1 className='text-center p-5'>Nuestras Actividades</h1>        
          <Container className='text-start text-resp'>
          <Row xs={1} md={2} lg={3} className="g-4 py-4 mx-2">
            {cursos.slice(0, maxCard).map( (curso) =>  (
            <Col>
    <Card style={{ width: '16rem', margin:'auto' }} key={curso.id || curso._id} className='border-0'>
      <Card.Img style={{ width:'8rem', margin:'auto' }} variant="top" src={curso.imagen || "./img/cursoNuevo.png"} />
      <Card.Body className='text-start m-auto'>
        <Card.Title className='text-center text-title'>{curso.nombre}</Card.Title>
        <Card.Subtitle className='text-resp'><Image src="./vectores/categoriaVector.svg" alt="categoria" className='imgVectores'  fluid/> Categoria: {curso.categoria}</Card.Subtitle>
      </Card.Body>
      <ListGroup  className="list-group-flush m-auto">
        <ListGroup.Item><Image src="./vectores/profesorVector.svg" alt="profesor" className='imgVectores'  fluid/> Profesor: {curso.profesor}</ListGroup.Item >
        <ListGroup.Item><Image src="./vectores/diasVector.svg" alt="dias" className='imgVectores'  fluid/> Días: {curso.dias}</ListGroup.Item>
        <ListGroup.Item><Image src="./vectores/horarioVector.svg" alt="horario" className='imgVectores'  fluid/> Horario: {curso.horario}</ListGroup.Item>
        <ListGroup.Item><Image src="./vectores/costoVector.svg" alt="costo" className='imgVectores' fluid/> Costo: $ {curso.costo}</ListGroup.Item>
      </ListGroup>
      <Card.Body className='m-auto'>
        <NavLink className="btn btn-outline-success text-resp" to='/actividades'>Inscribirme</NavLink>
      </Card.Body>
    </Card>
    </Col>
 ))}
    </Row>
    </Container>
    </div>
   
    </>
  );
}

export default CardCursos;
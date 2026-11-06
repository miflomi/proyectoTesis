import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import React, {useState, useEffect } from "react";
import Actividad from './Actividad';

function CardCursos() {

    
    const [cursos, setCursos] = useState([]);
    const endPoint = 'https://apiclub.onrender.com/api/actividades';

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
        {cursos.map( (curso) =>  (
    <Card style={{ width: '18rem' }} key={curso.id || curso._id} >
      <Card.Img variant="top" src={curso.imagen || "./assets/img/cursoNuevo.png"} />
      <Card.Body>
        <Card.Title>{curso.nombre}</Card.Title>
        <Card.Text>
            Categoria: {curso.categoria}            
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Profesor: {curso.profesor}</ListGroup.Item>
        <ListGroup.Item>Días: {curso.dias}</ListGroup.Item>
        <ListGroup.Item>Horario: {curso.horario}</ListGroup.Item>
        <ListGroup.Item>Costo: $ {curso.horario}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
    
    ))}
    </>
  );
}

export default CardCursos;
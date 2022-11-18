import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Axios from 'axios';

let apiUrl = "https://mlb-card-collection-api.onrender.com";

export default function AllCards () {

  const navigate = useNavigate();

  const navigateToEditInput = () => {
    navigate('/editInput');
  }

    const [display, setDisplay] = useState([])

    const loadCards = async () => {
      await fetch(`${apiUrl}/batters`)
      .then(res => res.json())
      .then(resData => setDisplay(resData))
    }
    console.log(display);

     useEffect(() => {
        loadCards();
        }, []);

        const deleteBatter = async (id, e) => {
          e.preventDefault();
         Axios.delete(`${apiUrl}/api/batters/${id}`)
          .then(res => console.log("Deleted!", res))
          .catch(err => console.log(err));
        }
        

    return  <>
    <Navbar bg="primary" variant="dark">
      <Container>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/addCard">Add Card</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    <div>
      {display.map(batter => (
        <Card key={batter.id} style={{ width: '18rem', marginTop: '20px', margin: '20px auto'  }}>
      <Card.Img variant="top" src={batter.images}/>
      <Card.Body>
        <Card.Title>{batter.first_name} {batter.last_name}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
       <ListGroup.Item>id: {batter.id}</ListGroup.Item>
        <ListGroup.Item>AVG: {batter.AVG}</ListGroup.Item>
        <ListGroup.Item>HR: {batter.HR}</ListGroup.Item>
        <ListGroup.Item>RBI: {batter.RBI}</ListGroup.Item>
        <ListGroup.Item>OPS: {batter.OPS}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <button className="btn btn-danger me-4" onClick={e => deleteBatter(batter.id, e)}>Delete Card</button>
        <button className="btn btn-warning ms-4" onClick={navigateToEditInput}>Edit Card</button>
      </Card.Body>
    </Card>
     ))}
    </div>
  </>
}

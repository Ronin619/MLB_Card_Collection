import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Axios from 'axios';

let apiUrl = "https://mlb-card-collection-api.onrender.com";

export default function AllCards () {

    const [display, setDisplay] = useState([])
    
     useEffect(() => {
        loadCards();
        }, []);

        const deleteBatter = (lastName) => {
          
        }

    const loadCards = async () => {
      await fetch(`${apiUrl}/batters`)
      .then(res => res.json())
      .then(resData => setDisplay(resData))
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
        <Card key={batter.batter_id} style={{ width: '18rem', marginTop: '20px', margin: '20px auto'  }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>{batter.first_name} {batter.last_name}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>AVG: {batter.AVG}</ListGroup.Item>
        <ListGroup.Item>HR: {batter.HR}</ListGroup.Item>
        <ListGroup.Item>RBI: {batter.RBI}</ListGroup.Item>
        <ListGroup.Item>OPS: {batter.OPS}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <button className="btn btn-danger me-4" onClick={() => deleteBatter()}>Delete Card</button>
        <button className="btn btn-warning ms-4">Edit Card</button>
      </Card.Body>
    </Card>
     ))}
    </div>
  </>
}

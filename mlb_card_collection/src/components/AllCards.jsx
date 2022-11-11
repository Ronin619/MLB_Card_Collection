import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

let apiUrl = "https://mlb-card-collection-api.onrender.com";

export default function AllCards () {

    const [display, setDisplay] = useState(null)
    
     useEffect(() => {
        fetch(`${apiUrl}/batters`)
        .then(response => response.json())
        .then(data => console.log(data));
        }, []);
        
    return  <>
    <Navbar bg="primary" variant="dark">
      <Container>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/addCards">Add Card</Nav.Link>
          <Nav.Link href="/deleteCard">Delete Card</Nav.Link>
          <Nav.Link href="/editCard">Edit Card</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  </>
}
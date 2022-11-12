import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

export default function EditCard () {
    return <>
     <Navbar bg="primary" variant="dark">
      <Container>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/allCards">All Cards</Nav.Link>
          <Nav.Link href="/deleteCard">Delete Card</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
        <h1 className="text-center mt-5">Edit Card</h1>
    </>
}
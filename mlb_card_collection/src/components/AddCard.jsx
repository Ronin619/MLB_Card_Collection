import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CardInput from './CardInput';

export default function AddCard() {

    return <>
      <Navbar bg="primary" variant="dark">
      <Container>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/allCards">All Cards</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    <div>
    <div className="wrapper">
    <h1 className="text-center mt-5">Add Card</h1>
    </div>
    <CardInput />
    </div>
    </>
  }

  
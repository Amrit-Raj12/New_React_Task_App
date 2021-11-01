import React from 'react'
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap'
import {BrowserRouter as Router} from 'react-router-dom';

const Header = () => {
    return (
        <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="/">Todo List</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
        <Router>
      <Nav.Link href="/create">Add List</Nav.Link>
      <Nav.Link href="/list">Show Tasks</Nav.Link>
      </Router>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">Amrit Raj</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        About
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}

export default Header

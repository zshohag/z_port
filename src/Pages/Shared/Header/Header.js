import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'

const Header = () => {
    return (
        <div>
<Navbar bg="light" expand="lg">
         
  <Container >
    <Navbar.Brand href="#">Z PORTFOLIO </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">HOME</Nav.Link>
        <Nav.Link href="#action1">ABOUT</Nav.Link>
        <Nav.Link href="#action2">CONTACT</Nav.Link>
     
    
      </Nav>
      <div className='social'>
      <a href="https://www.facebook.com/zdshohag" target="_blank" ><i class="fab fa-facebook fa-2x "></i></a>
      <a href="https://github.com/zshohag" target="_blank" ><i class="fab fa-github fa-2x "></i></a>
      <a href="https://www.linkedin.com/in/zd-shohag/" target="_blank" ><i class="fab fa-linkedin-in fa-2x "></i></a>
      </div>
    </Navbar.Collapse>
  </Container>

</Navbar>
        </div>
    );
};

export default Header;
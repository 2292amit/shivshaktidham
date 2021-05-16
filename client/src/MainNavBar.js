import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
//import Form from 'react-bootstrap/Form';
//import FormControl from 'react-bootstrap/FormControl';
import Nav from 'react-bootstrap/Nav';

import './App.css';

const MainNavBar = ({ children }) => {

  return (
    <>
      <Navbar expand="lg" className="font-weight-bold" variant="dark" fixed="top" style={{backgroundColor:"#301934"}}>
        <Navbar.Brand href="/" style={{ color: "#d4a537"}}>
          <span className="mr-2">
            <img src="/logo192.png" width="25" height="25" alt="" />
          </span>
          ShivShakti Dham
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/" style={{ color: "#d4a537"}}>Home</Nav.Link>
            <Nav.Link href="/gallery" style={{ color: "#d4a537"}}>Gallery</Nav.Link>
            <Nav.Link href="/video" style={{ color: "#d4a537"}}>Videos</Nav.Link>
            <Nav.Link href="/about"style={{ color: "#d4a537"}}>About</Nav.Link>
            <Nav.Link href="/contactus" style={{ color: "#d4a537"}}>Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default MainNavBar;

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
      <Navbar expand="lg" className="font-weight-bold">
        <Navbar.Brand href="/">
          <span className="mr-2">
            <img src="/logo192.png" width="25" height="25" alt="" />
          </span>
          ShivShakti Dham
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/gallery">Gallery</Nav.Link>
            <Nav.Link href="/video">Videos</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contactus">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default MainNavBar;


import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {NavLink,Link} from "react-router-dom";
import {  toast } from 'react-toastify';
import { useNavigate, useLocation } from 'react-router-dom';
import { UserContext } from '../context/usercontext';
import { useContext } from 'react';
function Header_bin() {
  return (
    <Navbar expand="lg" className="bg-light" >
    <Container>
      {/* <Navbar.Brand href="/">
          <img
            src={logoNav}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          /> BKRA</Navbar.Brand> */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
    
                <Nav className="me-auto">
                    <Link  className='nav-link' to="/bin/:id/detail">Detail</Link>
                    <Link  className='nav-link' to="/bin">History</Link>
                    <Link  className='nav-link' to="/setting">Setting</Link>
                    <Link  className='nav-link' to="/rank">Chart</Link>
                    <Link  className='nav-link' to="/rank">Chart</Link>
                </Nav>
      </Navbar.Collapse>
     </Container>
  </Navbar>
  )
}

export default Header_bin

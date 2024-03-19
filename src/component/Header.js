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
import './Header.scss'
import { FaShoppingCart } from "react-icons/fa";
// import './Header.scss'  
function Header() {
  const location = useLocation();
  const currentPath = location.pathname;
  const { user,logout } = useContext(UserContext);

  const navigate = useNavigate();
  const handleLogout=()=>{
        logout()
        if(user.auth){
              toast.success('Logout successfully')
              navigate('/')
        }
  }
  return (
   <>
    <Navbar expand="lg" className="navbar" >
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        {
          (user && user.auth || currentPath === '/') &&
            <>
                  <Nav className="me-auto nav">
                      <Link  className='nav-link' to="/map">Map</Link>
                      <Link  className='nav-link' to="/bin">Bin</Link>
                      <Link  className='nav-link' to="/setting">Setting</Link>
                      <Link  className='nav-link' to="/users">Users</Link>
                      <Link  className='nav-link' to="/voucher/shoppe">Vouchers</Link>
                      <Link  className='nav-link' to="/statistics">Statistics</Link>
                  </Nav>
                  <Nav className='nav'>
                        <Link  className='nav-link' to="/voucheruser"><FaShoppingCart className='FaShoppingCart'/></Link>
                  </Nav>
                  <Nav className='nav'>
                    <div>
                       <p>Welcome, Dat Dinh</p> 
                       <p>Point : 500 </p>
                    </div>
                  </Nav>
                  <Nav>
                      {user && user.auth ? 
                      <NavDropdown.Item  onClick={handleLogout} >Logout</NavDropdown.Item>: 
                      <NavLink  className='dropdown-item' to="/">Login</NavLink>}
                  </Nav>
                {/* //////////// */}
                 
            </>
        }
       
          
        </Navbar.Collapse>
       </Container>
    </Navbar>
   </>
  )
}

export default Header

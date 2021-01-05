import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Styles = styled.div`
    .navbar {
        background-color: #222;
    }

    .navbar-brand, .ReactBootStrap-navbar-nav .ReactBootStrap-nav-link {
        color: #bbb;

        &:hover {
            color: white;
        }
    }
`;

export const MenuBar = () => (
    <div className="MenuBar">
    <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <ReactBootStrap.Navbar.Brand href="/">HRM</ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrap.Nav className="ml-auto">
      <ReactBootStrap.Nav.Link href="/">Home</ReactBootStrap.Nav.Link>
      <ReactBootStrap.NavDropdown title="Programs" id="collapsible-nav-dropdown">
        <ReactBootStrap.NavDropdown.Item href="/professional">Professional Development</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="/leadtrain">LeaderShip Training</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="/teamdev">Team Development</ReactBootStrap.NavDropdown.Item>
        {/* <ReactBootStrap.NavDropdown.Divider />
        <ReactBootStrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootStrap.NavDropdown.Item> */}
      </ReactBootStrap.NavDropdown>
    </ReactBootStrap.Nav>
    <ReactBootStrap.Nav>
      <ReactBootStrap.Nav.Link href="/about">About</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="/contact">Contact Us</ReactBootStrap.Nav.Link>
    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>
</div>

)


    // <Styles>
    //     <ReactBootStrap.Navbar expand="lg">
    //         <ReactBootStrap.Navbar.Brand href="/">HRM</ReactBootStrap.Navbar.Brand>
    //         <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
    //         <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
    //             <ReactBootStrap.Nav className="ml-auto">
    //                 <ReactBootStrap.Nav.Item><ReactBootStrap.Nav.Link><Link to="/">Home</Link></ReactBootStrap.Nav.Link></ReactBootStrap.Nav.Item>
    //                 <ReactBootStrap.NavDropdown title="Programs" id="collapsible-nav-dropdown">
    //                     <ReactBootStrap.NavDropdown.Item><ReactBootStrap.Nav.Link><Link to="/professional">Professional Development</Link></ReactBootStrap.Nav.Link></ReactBootStrap.NavDropdown.Item>
    //                     <ReactBootStrap.NavDropdown.Item><ReactBootStrap.Nav.Link><Link to="/leadtrain">Leadership Training</Link></ReactBootStrap.Nav.Link></ReactBootStrap.NavDropdown.Item>
    //                     <ReactBootStrap.NavDropdown.Item><ReactBootStrap.Nav.Link><Link to="/teamdev">Team Development</Link></ReactBootStrap.Nav.Link></ReactBootStrap.NavDropdown.Item>
    //                 </ReactBootStrap.NavDropdown>
    //                 <ReactBootStrap.Nav.Item><ReactBootStrap.Nav.Link><Link to="/about">About</Link></ReactBootStrap.Nav.Link></ReactBootStrap.Nav.Item>
    //                 <ReactBootStrap.Nav.Item><ReactBootStrap.Nav.Link><Link to="/contact">Contact Us</Link></ReactBootStrap.Nav.Link></ReactBootStrap.Nav.Item>
    //             </ReactBootStrap.Nav>
    //         </ReactBootStrap.Navbar.Collapse>
    //     </ReactBootStrap.Navbar>
    // </Styles>
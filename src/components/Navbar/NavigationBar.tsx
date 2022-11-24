import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useLocation } from "react-router-dom";
import { pagePaths } from '../../constants/pagePaths'

import { Mosque } from '../../constants/labels';


import './Navbar.css'

function NavigationBar() {
    const location = useLocation();

    return (
        <>
            <Navbar bg="primary" expand="lg" variant="dark" sticky="top" collapseOnSelect>
                <Container>
                    <Navbar.Brand href={pagePaths.rootHome}>
                        <i className="fa-solid fa-mosque margin-right-10"></i>
                        {Mosque.title}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto"
                            activeKey={location.pathname}>
                            <Nav.Link href={pagePaths.services}>Services</Nav.Link>
                            <Nav.Link href={pagePaths.events}>Events</Nav.Link>
                        </Nav>
                        <Nav activeKey={location.pathname}>
                            <Nav.Link href={pagePaths.donation}>Donation</Nav.Link>
                            <Button variant="outline-info">LOGIN</Button>
                            <Nav.Link eventKey={2} href="#memes">
                                My Account
                            </Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavigationBar;
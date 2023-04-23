/* eslint-disable no-unused-vars */
import React from 'react';
import logo from '../../../assets/my-assets/logo.png'
import moment from 'moment/moment';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee"

const Header = () => {
    return (
        <Container className='mt-4'>
            <div className='text-center'>
                <img src={logo} alt="" />
                <p className='text-secondary'> <small>Journalism Without Fear or Favour</small> </p>
                {/* Moment.js */}
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className='d-flex'>
                <Button variant='danger'>Latest</Button>

                {/* npm install react-fast-marquee */}
                <Marquee className='text-danger fw-bold' speed={50}>
                Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                </Marquee>
            </div>

            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mx-auto">
                    <Nav.Link href="#features">Home</Nav.Link>
                    <Nav.Link href="#pricing">About</Nav.Link>
                    <Nav.Link href="#pricing">Career</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="#deets">Profile</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                        <Button variant='secondary'>Login</Button>
                    </Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </Container>
    );
};

export default Header;
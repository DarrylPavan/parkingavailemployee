import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav';
import './Navigation.css';


const Navigation = () => {
    return (
       
    <Navbar bg="medium"  fluid className = 'barColor' >

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        
            <Nav className='mr-auto ' >
                <Nav.Link className='linkText' href='/'><span className='linkText'>Parking Lots</span></Nav.Link>
                    <Nav.Link href='/availability'><span className='linkText'>Availability</span></Nav.Link>
                </Nav>

                <Nav className='ml-auto'>
                    <Nav.Link><span className='linkText'>Signout</span></Nav.Link>
                </Nav>
        </Navbar.Collapse>
    </Navbar>

        

    );
}

export default Navigation;
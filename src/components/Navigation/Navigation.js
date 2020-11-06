import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav';
import './Navigation.css';

const Navigation = () => {
    return (
       
            <Navbar bg="medium" expand="lg" fluid className = 'barColor' >
                <Nav className = "ml-auto">
                    <Nav.Link>Sign out says Dr Dre</Nav.Link>
                    <Nav.Link>Check user side</Nav.Link>
                </Nav>
            </Navbar>

        

    );
}

export default Navigation;
import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './ParkingLots.css';


const ParkingLots = () => {
    return (
        <Container fluid style={{backgroundColor: "blue"}}>
            <style type="text/css">
                    {`
                    .btn-flat {
                    background-color: #28A745;
                    color: white;
                    }

                    .btn-xxl {
                    padding: 1rem 1.5rem;
                    font-size: 1.5rem;
                    }
                    `}
                </style>
            
            <Row >
                <Col xs ={8} md={4} lg={4} className = "mt-2 ml-3" >
                    <Row className="mt-2 mb-3">

                
                        <Button variant="success" block  size="xxl">Lake Louise</Button>
                    </Row>
                    <Row className="mt-2 mb-3">
                        <Button variant="success"  block size="xxl">Morraine Lake</Button>
                    </Row>
                    <Row className="mt-2 mb-3">
                        <Button variant="success" block size="xxl">Overflow</Button>
                    </Row>
                </Col>
            </Row>
        </Container>

    );
}

export default ParkingLots;
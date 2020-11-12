import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Override from '../Override/Override';

class Availability extends React.Component {

    constructor(props) {
        super(props);

        this.state = {           
            
            currentParkingLot: {
                id: '',
                name: '',
                numAvailableSpots: '',
                capacity: ''
           },
        }
    }

    componentDidMount(props) {       
            

                const currentParkingLot = {
                id: 1,
                name: 'Lake Louise',
                numAvailableSpots: 52,
                capacity: 100
    };

       this.setState({ currentParkingLot: currentParkingLot });

    }
    render() {
        return (
        <Container fluid style={{backgroundColor: '#D4F1F4'}}>
            <Row>
                
                <Col xs ={12} md={12} lg={12} className = "mt-4">
                <h2 className="mb-4">Current Status of {this.state.currentParkingLot.name}</h2>
            
                
                <Override parkingLotId = { this.state.currentParkingLot.id } />

           {/* Custom Button CSS  */}
           {/* background-color: #189AB4; */}
           <style type="text/css">
                    {`
                    .btn-flat {
                    background-color: orange;                   
                    color: white;
                    }

                    .btn-xxl {
                    padding: 2rem 2.5rem;
                    font-size: 1.5rem;
                    }
                    `}
                </style>   
                
                    <Row className="mb-5">
                        <Col xs ={12} md={12} lg={3} className = "mt-3">
                            <div>Car Enter</div>
                        <Button variant="flat" size="xxl">+</Button>    
                        </Col>
                        <Col xs ={12} md={12} lg={3} className = "mt-3">
                            <div>Car Leave</div>
                            <Button variant="danger" size="lg">-</Button> 
                        </Col>
                    </Row>

                </Col>

            </Row>
        </Container>
        
        );
    }
}

export default Availability ;
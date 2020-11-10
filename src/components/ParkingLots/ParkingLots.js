import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './ParkingLots.css';
import Redirect from 'react-router-dom/Redirect';

class ParkingLots extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            redirect: null,
            parkingLotId: ''
        }
    }

    redirectToAvailability = (parkingLotId) => {
        // The is sets parking lot ID in App.js
        this.props.onParkingLotChange(parkingLotId);
        // Changing the value redirect and parkinglot ID  see this state above        
        this.setState({ redirect: "/parkingavailemployee/availability",
            parkingLotId: parkingLotId });
    } 

    render() {

        if (this.state.redirect) {
            return  <Redirect to={{ pathname: this.state.redirect }}/>
          }          
        return (
        <Container fluid style={{backgroundColor: '#D4F1F4'}}>
            {/* Custom Button CSS  */}
            <style type="text/css">
                    {`
                    .btn-flat {
                    background-color: #189AB4;
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
                        <Button variant="flat" block  size="xxl" onClick={() => this.redirectToAvailability(1)} >Lake Louise</Button>
                    </Row>
                    <Row className="mt-2 mb-3">
                        <Button variant="flat"  block size="xxl" onClick={() => this.redirectToAvailability(2)} >Morraine Lake</Button>
                    </Row>
                    <Row className="mt-2 mb-3">
                        <Button variant="flat" block size="xxl" onClick={() => this.redirectToAvailability(3)} >Overflow</Button>
                    </Row>
                </Col>
            </Row>
        </Container>

        );
    }
}

export default ParkingLots;
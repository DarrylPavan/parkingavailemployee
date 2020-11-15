import React from 'react';
import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './ParkingLots.css';
import Redirect from 'react-router-dom/Redirect';
import ParkingLot from '../ParkingLot/ParkingLot';

class ParkingLots extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            parkingLots : [],
            redirect: null
        }
    }

    componentDidMount(props) {
        // Call /parkingLots, GET, returns array of parking lot objects

        const parkingLots = [
            {
                id: 1,
                name: 'Lake Louise',
                numSpotsAvailable: 52,
                capacity: 100
            },

            {
                id: 2,
                name: 'Morraine Lake',
                numSpotsAvailable: 27,
                capacity: 80
            },

            {
                id: 3,
                name: 'Overflow',
                numSpotsAvailable: 160,
                capacity: 200
            },           
        ]

        this.setState({ parkingLots: parkingLots });
    }

    redirectToAvailability = (parkingLotId) => {
        // The is sets parking lot ID in App.js
        this.props.onParkingLotChange(parkingLotId);
        // Changing the value redirect and parkinglot ID  see this state above        
        this.setState({ redirect: "/parkingavailemployee/availability" });
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
                        <Row>
                            <Col className= "mt-2 mb-2" lg={12}>
                                <div className = "welcomeMessage">Welcome {this.props.userName}!</div>
                            </Col>
                        </Row>

                        {
                            this.state.parkingLots.map((parkingLot, i) => {
                                return (
                                    <ParkingLot                
                                        id={parkingLot.id}
                                        name={parkingLot.name}  
                                        redirectToAvailability = {this.redirectToAvailability}            
                                        />
                                    );
                            })
                        }
 
                        {/* <Row className="mt-2 mb-3">              
                            <Button variant="flat" 
                                block  
                                size="xxl" 
                                onClick={() => this.redirectToAvailability(1)} >Lake Louise</Button>
                        </Row>
                        <Row className="mt-2 mb-3">
                            <Button variant="flat"  
                                block 
                                size="xxl" 
                                onClick={() => this.redirectToAvailability(2)} >Morraine Lake</Button>
                        </Row>
                        <Row className="mt-2 mb-3">
                            <Button variant="flat" 
                                block 
                                size="xxl" 
                                onClick={() => this.redirectToAvailability(3)} >Overflow</Button>
                        </Row> */}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default ParkingLots;
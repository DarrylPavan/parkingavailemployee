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

    incrementNumAvailableSpots = () => {
        //Call increment api endpoint (/incrementNumAvailableSpots); returns an updated parking lot object
   
        console.log('In incrementNumAvailableSpots')

        const currentParkingLot = {
            id: 1,
            name: 'Lake Louise',
            numAvailableSpots: 53,
            capacity: 100
        };

        this.setState({ currentParkingLot: currentParkingLot });
    }

    decrementNumAvailableSpots = () => {
        //Call decrement api endpoint (/decrementNumAvailableSpots); returns an updated parking lot object
   
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
                <h2 className="mb-2">{this.state.currentParkingLot.name} Parking Lot</h2>
            
                
                <Override currentParkingLot = { this.state.currentParkingLot } />

           {/* Custom Button CSS  */}
           {/* background-color: #189AB4; */}
           <style type="text/css">
                    {`
                    .btn-flat {
                    background-color: #189AB4;                   
                    color: white;
                    }

                    .btn-xxl {
                    padding: 2rem 2.5rem;
                    font-size: 1.5rem;
                    }
                    `}
                </style>   
                
                    <Row className="mt-2 mb-2">
                        <Col xs ={12} md={12} lg={3} className = "mt-3">
                            <div className='d-flex'>
                                <Button variant="success" size="xxl" onClick={this.decrementNumAvailableSpots}>+</Button> 
                                <Button variant="success" className='ml-5' size="xxl" style={{ background: "orange" }} onClick={this.incrementNumAvailableSpots}>-</Button>                                
                            </div>    
                        </Col>
                    </Row>

                </Col>

            </Row>
        </Container>
        
        );
    }
}

export default Availability ;
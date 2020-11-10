import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


class Availability extends React.Component {

    constructor(props) {
        super(props);

        this.state = {           
            parkingLots : null,
            currentParkingLot: {
                id: '',
                name: '',
                numSpotsAvailable: '',
                capacity: ''
           },
        }
    }

    componentDidMount(props) {
       
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
     

       const currentParkingLot = parkingLots.find(parkingLot => parkingLot.id === this.props.parkingLotId );

       this.setState({ parkingLots: parkingLots, currentParkingLot: currentParkingLot });

    }
    render() {
        return (
        <Container fluid style={{backgroundColor: "gray"}}>
            <Row>
                <Col xs ={12} md={12} lg={6} className = "mt-4" >
                    <h2 className="mb-4">Select Parking Lot</h2>                 
            <table>
                    <tr>
                        <td><label htmlFor='lakeLouiseCenter'>Lake Louise Center</label></td>
                        <td><input id='lakeLouiseCenter' type="radio" name="lot" /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor='morraineLake'>Morraine Lake</label></td>
                        <td><input id='morraineLake' type="radio" name="lot"/></td>
                    </tr>

                    <tr>
                        <td><label htmlFor='overflow'>Overflow</label></td>
                        <td><input id='overflow' type="radio" name="lot"/></td>
                    </tr>
        </table>  
                                  
                </Col>
                <Col xs ={12} md={12} lg={6} className = "mt-4">
                <h2 className="mb-4">Current Status of {this.state.currentParkingLot.name}</h2>
        
        <Row>

                        
        <div className="d-flex flex-wrap">
       
            <div className= "mr-5">
                <div>
                    <label for='numOfSpotsAvailable'> Available</label>
                </div>
                    <div>
                        <input type="text" id="numOfSpotsAvailable"/>            
                    </div>
            </div>
  
            <div>
                <div>
                    <label for='capacity'>Capacity</label>
                </div>
                <div>
                    <input type="text" id="capacity" value='20' readonly/>            
                </div>
            </div>  
        </div>
                </Row>
                    <Row className="mb-5">
                        <Col xs ={12} md={12} lg={3} className = "mt-3">
                            <div>Car Enter</div>
                        <Button variant="success" size="lg">+</Button>    
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
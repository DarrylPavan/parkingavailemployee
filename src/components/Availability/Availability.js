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
            parkingLotId: props.parkingLotId,
            activeOverrideField: '',
            capacity: '',
            numOccupiedSpots: '',
            numAvailableSpots: '',

            currentParkingLot: {
                id: '',
                name: '',
                numAvailableSpots: '',
                capacity: ''
           },
        }
    }

    retrieveParkingLot = (parkingLotId) => {
        // Call /parkingLot passing in id in query string, GET, returns currentParkingLot

        const parkingLot = {
            id: 1,
            name: 'Lake Louise',
            numAvailableSpots: 52,
            capacity: 100
        };

        return parkingLot;

    }

    componentDidMount(props) {       
        let currentParkingLot = this.retrieveParkingLot(this.state.parkingLotId);

        this.setState({ currentParkingLot: currentParkingLot, 
                        capacity: currentParkingLot.capacity, 
                        numAvailableSpots: currentParkingLot.numAvailableSpots, 
                        numOccupiedSpots: currentParkingLot.capacity - currentParkingLot.numAvailableSpots });

    }

    engageOverride = (activeOverrideField) =>{

        if (this.state.activeOverrideField === '') {
            this.setState({ activeOverrideField: activeOverrideField });
            //the else if is to reset back previous state
        } else if (this.state.activeOverrideField === activeOverrideField) {
            if (activeOverrideField === 'capacity')
            {
                this.setState({capacity: this.state.currentParkingLot.capacity});
            }
            else if (activeOverrideField === 'numOccupiedSpots') {
                this.setState({numOccupiedSpots: this.state.currentParkingLot.capacity 
                                                - this.state.currentParkingLot.numAvailableSpots});
            }
            else if (activeOverrideField === 'numAvailableSpots') {
                this.setState({numAvailableSpots: this.state.currentParkingLot.numAvailableSpots});
            }


            this.setState({ activeOverrideField: ''});
        }
    }

    getOverrideButtonColor = (activeOverrideField) => {
        if (this.state.activeOverrideField === activeOverrideField)
        {
            return 'red';
        } else {
            return '#189AB4';
        }
    }

    getOverrideTextBoxColor = (activeOverrideField) => {
        if (this.state.activeOverrideField === activeOverrideField)
        {
            return 'white';
        } else {
            return 'lightgrey';
        }
    }

    getOverrideTextBoxReadOnly = (activeOverrideField) => {
        if (this.state.activeOverrideField === activeOverrideField)
        {
            //can only type if false
            return false;
        } else {
            return true;
        }
    }

    setStateValueForOverrideField = (event) => {
        console.log(event.target.id);
        if (event.target.id === 'capacity')
        {
            this.setState({capacity: event.target.value});
        }
        else if (event.target.id === 'numOccupiedSpots') {
            this.setState({numOccupiedSpots: event.target.value});
        }
        else if (event.target.id === 'numAvailableSpots') {
            this.setState({numAvailableSpots: event.target.value});
        }
    }

    saveParkingLotChanges = () => {

       // Call /saveParkingLot passing id by query string, and only field that changed in body, PATCH, returns currentParkingLot

       const currentParkingLot = {
            id: 1,
            name: 'Lake Louise',
            numAvailableSpots: 152,
            capacity: 200
        }; 
    
       this.setState({capacity: currentParkingLot.capacity, 
                    numOccupiedSpots: currentParkingLot.capacity - currentParkingLot.numAvailableSpots, 
                    numAvailableSpots: currentParkingLot.numAvailableSpots});
    }

    resetParkingLot = () => {
      //Call /resetParkingLot, passing in id by query string, PUT, returns updated parking lot object
      const currentParkingLot = {
        id: 1,
        name: 'Lake Louise',
        numAvailableSpots: 100,
        capacity: 100
        }; 
    
        this.setState({capacity: currentParkingLot.capacity, 
                    numOccupiedSpots: currentParkingLot.capacity - currentParkingLot.numAvailableSpots, 
                    numAvailableSpots: currentParkingLot.numAvailableSpots, activeOverrideField: ''});

    }

    incrementNumAvailableSpots = () => {
        //Call /incrementNumAvailableSpots passing id in query string, PATCH, returns an updated parking lot object
   
        console.log('In incrementNumAvailableSpots')

        const currentParkingLot = {
            id: 1,
            name: 'Lake Louise',
            numAvailableSpots: 53,
            capacity: 100
        };

        this.setState({ currentParkingLot: currentParkingLot, 
                    numAvailableSpots: currentParkingLot.numAvailableSpots, 
                    numOccupiedSpots: currentParkingLot.capacity - currentParkingLot.numAvailableSpots });            
    }

    decrementNumAvailableSpots = () => {
        //Call /decrementNumAvailableSpots passing id in query string, PATCH, returns an updated parking lot object
   
        const currentParkingLot = {
            id: 1,
            name: 'Lake Louise',
            numAvailableSpots: 52,
            capacity: 100
        };

        this.setState({ currentParkingLot: currentParkingLot, 
                        numAvailableSpots: currentParkingLot.numAvailableSpots, 
                        numOccupiedSpots: currentParkingLot.capacity - currentParkingLot.numAvailableSpots });        

    }

    render() {
        return (
            <Container fluid style={{backgroundColor: '#D4F1F4'}}>
                <Row>                  
                    <Col xs ={12} md={12} lg={12} className = "mt-4">
                        <h2 className="mb-2">{this.state.currentParkingLot.name} Parking Lot</h2>
                
                    
                        { 
                            this.state.currentParkingLot.id &&  
                            
                            <Override engageOverride = { this.engageOverride } 
                                getOverrideButtonColor = { this.getOverrideButtonColor } 
                                getOverrideTextBoxColor = { this.getOverrideTextBoxColor } 
                                getOverrideTextBoxReadOnly = { this.getOverrideTextBoxReadOnly} 
                                setStateValueForOverrideField = { this.setStateValueForOverrideField } 
                                saveParkingLotChanges = { this.saveParkingLotChanges } 
                                resetParkingLot = { this.resetParkingLot } 
                                getStateCapacity = { this.getStateCapacity } 
                                getStateNumAvailableSpots = { this.getStateNumAvailableSpots } 
                                getStateNumOccupiedSpots = { this.getStateNumOccupiedSpots } 
                                capacity = { this.state.capacity } 
                                numAvailableSpots = { this.state.numAvailableSpots} 
                                numOccupiedSpots = { this.state.numOccupiedSpots } /> 
                        }

                        {/* Custom Button CSS  */}
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
                                    <Button variant="success" 
                                        size="xxl" 
                                        onClick={this.decrementNumAvailableSpots}>+</Button> 
                                    <Button variant="success" 
                                        className='ml-5' 
                                        size="xxl" 
                                        style={{ background: "orange" }} 
                                        onClick={this.incrementNumAvailableSpots}>-</Button>                                
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
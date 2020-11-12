import React from 'react';
import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal'

class Override extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            parkingLotId: props.parkingLotId,
            overrideField: '',
            currentParkingLot: '',
            capacity: '',
            numOccupiedSpots: '',
            numAvailableSpots: '',
            showSaveConfirmation: false,
            showResetConfirmation: false
        }
    }
   
    componentDidMount() {
        const currentParkingLot = {
            id: 1,
            name: 'Lake Louise',
            numAvailableSpots: 52,
            capacity: 100
        };

        this.setState({ currentParkingLot: currentParkingLot, capacity: currentParkingLot.capacity, numAvailableSpots: currentParkingLot.numAvailableSpots, numOccupiedSpots: currentParkingLot.capacity - currentParkingLot.numAvailableSpots });        
    }

    engageOverride = (overrideField) =>{

        if (this.state.overrideField === '') {
            console.log(overrideField);
            this.setState({ overrideField: overrideField });
        } else if (this.state.overrideField === overrideField) {
            if (overrideField === 'capacity')
            {
                this.setState({capacity: this.state.currentParkingLot.capacity});
            }
            else if (overrideField === 'numOccupiedSpots') {
                this.setState({numOccupiedSpots: this.state.currentParkingLot.capacity - this.state.currentParkingLot.numAvailableSpots});
            }
            else if (overrideField === 'numAvailableSpots') {
                this.setState({numAvailableSpots: this.state.currentParkingLot.numAvailableSpots});
            }


            this.setState({ overrideField: ''});
        }
    }

    setOverrideButtonColor = (overrideField) => {
        if (this.state.overrideField === overrideField)
        {
            return 'red';
        } else {
            return '#189AB4';
        }
    }

    setOverrideTextBoxColor = (overrideField) => {
        if (this.state.overrideField === overrideField)
        {
            return 'white';
        } else {
            return 'grey';
        }
    }

    setOverrideTextBoxReadOnly = (overrideField) => {
        if (this.state.overrideField === overrideField)
        {
            return false;
        } else {
            return true;
        }
    }

    setStateValueForField = (event) => {
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

    openSaveConfirmation = () => {
        console.log('Open modal');
        this.setState({ showSaveConfirmation: true });
    }
    closeSaveConfirmation = () => this.setState({ showSaveConfirmation: false });
    
    saveChanges = () => {
        // Call save API and fill currentParkingLot

        const currentParkingLot = {
            id: 1,
            name: 'Lake Louise',
            numAvailableSpots: 152,
            capacity: 200
        }; 
        
        this.setState({capacity: currentParkingLot.capacity, numOccupiedSpots: currentParkingLot.capacity - currentParkingLot.numAvailableSpots, numAvailableSpots: currentParkingLot.numAvailableSpots});

        this.closeSaveConfirmation();
    }

    openResetConfirmation = () => {
        this.setState({ showResetConfirmation: true });
    }

    closeResetConfirmation = () => this.setState({ showResetConfirmation: false });

    resetToDefault = () => {
        //Call reset api, and get a parking lot object
        const currentParkingLot = {
            id: 1,
            name: 'Lake Louise',
            numAvailableSpots: 100,
            capacity: 100
        }; 
        
        this.setState({capacity: currentParkingLot.capacity, numOccupiedSpots: currentParkingLot.capacity - currentParkingLot.numAvailableSpots, numAvailableSpots: currentParkingLot.numAvailableSpots, overrideField: ''});

        this.closeResetConfirmation();       
    }

    render() {

       return(


        
    
    <Row>

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
        <table>
            <tr>
                <td><label htmlFor='capacity' className ='ml-2'>Capacity:</label></td>
                <td><input id='capacity' type="text" name="capacity" style={{ backgroundColor: this.setOverrideTextBoxColor('capacity')}} readOnly={ this.setOverrideTextBoxReadOnly('capacity')} value = {this.state.capacity} onChange={ this.setStateValueForField.bind(this)}/></td>
                <td><Button variant="flat" size="lg" className ='ml-2' onClick={ () => this.engageOverride('capacity')} style= {{backgroundColor: this.setOverrideButtonColor('capacity')}}>Override</Button></td>
            </tr>
            <tr>
                <td><label htmlFor='numAvailableSpots'className ='ml-2'>Number of Available Spots:</label></td>
                <td><input id='numAvailableSpots' type="text" name="numAvailableSpots" style={{ backgroundColor: this.setOverrideTextBoxColor('numAvailableSpots')}} readOnly={ this.setOverrideTextBoxReadOnly('numAvailableSpots')} value = {this.state.numAvailableSpots} onChange={ this.setStateValueForField.bind(this)}/></td>
                <td><Button variant="flat" size="lg" className ='ml-2' onClick={ () => this.engageOverride('numAvailableSpots')} style= {{backgroundColor: this.setOverrideButtonColor('numAvailableSpots')}}>Override</Button></td>
            </tr>

            <tr>
                <td><label htmlFor='numOccupiedSpots' className ='ml-2'>Number of Occupied Spots:</label></td>
                <td><input id='numOccupiedSpots' type="text" name="numOccupiedSpots" style={{ backgroundColor: this.setOverrideTextBoxColor('numOccupiedSpots')}} readOnly={ this.setOverrideTextBoxReadOnly('numOccupiedSpots')} value = {this.state.numOccupiedSpots} onChange={ this.setStateValueForField.bind(this) } /></td>
                <td><Button variant="flat" size="lg" className ='ml-2' onClick={ () => this.engageOverride('numOccupiedSpots')} style= {{backgroundColor: this.setOverrideButtonColor('numOccupiedSpots')}}>Override</Button></td>
            </tr>

            <tr>
                <td><label htmlFor='ResetSetting' className ='ml-2'>Save above Settings?</label></td>
                <td><Button variant="flat" size="lg" className ='ml-2' onClick={this.openSaveConfirmation}>Save</Button></td>
            </tr>
            <tr>
                <td><label htmlFor='saveReset' className ='ml-2'>Reset to Defaults?</label></td>
                <td><Button variant="flat" size="lg" className ='ml-2' onClick={this.openResetConfirmation}>Reset</Button></td>
            </tr>            
        </table> 
        <Modal show={this.state.showSaveConfirmation} onHide={this.closeSaveConfirmation}>
          <Modal.Header closeButton>
            <Modal.Title>Save Changes</Modal.Title>
          </Modal.Header>
          <Modal.Body>Do you wish to keep these changes?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.saveChanges}>
              Yes 
            </Button>
            <Button variant="secondary" onClick={this.closeSaveConfirmation}>
              Cancel 
            </Button>
          </Modal.Footer>
        </Modal> 
        <Modal show={this.state.showResetConfirmation} onHide={this.closeResetConfirmation}>
          <Modal.Header closeButton>
            <Modal.Title>Reset to Default</Modal.Title>
          </Modal.Header>
          <Modal.Body>Do you wish to reset the values to default?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.resetToDefault}>
              Yes 
            </Button>
            <Button variant="secondary" onClick={this.closeResetConfirmation}>
              Cancel 
            </Button>
          </Modal.Footer>
        </Modal>            


        {/* <div className="d-flex flex-wrap">
        
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

        </div> */}
    </Row>
    );

    }

}

export default Override ;
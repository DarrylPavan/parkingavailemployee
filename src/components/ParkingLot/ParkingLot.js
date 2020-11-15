import React from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';


const ParkingLot = ({ id, name, redirectToAvailability }) => {
        return(
            <Row className="mt-2 mb-3">              
                    <Button variant="flat" 
                        block  
                        size="xxl" 
                        onClick={() => redirectToAvailability(id)} >{name}
                    </Button>
            </Row> 
        );
}

export default ParkingLot;
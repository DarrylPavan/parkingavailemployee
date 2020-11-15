import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav';
import './Navigation.css';
import Redirect from 'react-router-dom/Redirect';
import { LinkContainer } from 'react-router-bootstrap';

class Navigation extends React.Component {
    constructor (props) {
        super(props);
    
        this.state = {
            redirect: null

        }      
    }

    redirectToSignIn = () => {
        console.log('redirectToSignIn', window.localStorage.getItem('isSignedIn'))   
        this.props.logout();
        console.log('redirectToSignIn', window.localStorage.getItem('isSignedIn'))
        // Changing the value redirect         
        // this.setState({ redirect: "/parkingavailemployee"});
        window.location.href = '/parkingavailemployee'
    } 

    redirectToParkingLots = () => {
        this.props.refreshState();
        // this.props.logout();
        this.setState({ redirect: "/parkingavailemployee/parkinglots"});
        // window.location.href = '/parkingavailemployee/parkinglots'
    }
    
    render(){
        if (this.state.redirect) {
            return  <Redirect to={{ pathname: this.state.redirect }}/>
          } 
    return (
     
    <Navbar bg="medium"  fluid='true' className = 'barColor' >

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        
            <Nav className='mr-auto ' >
            
            {/* href = '/parkingavailemployee/parkinglots' */}
            {/* onClick = {this.redirectToParkingLots} */}
            <LinkContainer to='/parkingavailemployee/parkinglots'>
                <Nav.Link className='linkText' ><span className='linkText'>Parking Lots</span></Nav.Link>
                </LinkContainer>
                {/* Note we will be removing this link until dev done  */}
                    {/* <Nav.Link href='/parkingavailemployee/availability'><span className='linkText'>Availability</span></Nav.Link> */}
                </Nav>

                <Nav className='ml-auto'>
                    {/* <LinkContainer to='/parkingavailemployee'> */}
                    {/* onClick = {this.redirectToSignIn} */}
                        <Nav.Link onClick = {this.redirectToSignIn}><span className='linkText'>Signout</span></Nav.Link>
                    {/* </LinkContainer> */}
                </Nav>
        </Navbar.Collapse>
    </Navbar>

        

    );
    }
}

export default Navigation;
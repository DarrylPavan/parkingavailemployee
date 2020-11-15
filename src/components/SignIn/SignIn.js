import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Redirect from 'react-router-dom/Redirect';

class SignIn extends React.Component {
   constructor (props) {
        super(props);
    
        this.state = {
            email: '',
            password: '',
            redirect: null

        }  
    }

    //On change attribute for email text box
    onEmailChange = (event) => {

        this.setState({email: event.target.value});            
    }

    //On password attribute for password text box
    onPasswordChange = (event) => {
        this.setState({password: event.target.value});
    }
    
    onSubmitSignIn = (event) => {
        // Call/signin passing email address and password in the request body, POST, returns a user object.

        const user = {
            id: 1,
            name: 'Bob',
            email: 'rocketman@gmail.com'
        }
        this.props.loadUser(user);
        this.props.setSignIn(true);
        this.redirectToParkingLots();
    }

    redirectToParkingLots = () => {            
        // Changing the value redirect         
        this.setState({ redirect: "/parkingavailemployee/parkinglots"});
    } 

    render () {
        if (this.state.redirect) {
            return  <Redirect to={{ pathname: this.state.redirect }}/>
        }

        return (
        
            <Container fluid style={{backgroundColor: '#D4F1F4'}}>
                <Row>
                    <Col xs ={7} md={4} lg={4} className = "mt-2 mb-3">
                        <Form>
                            <Form.Group controlId="formBasicEmail">

                            <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" onChange = {this.onEmailChange}/>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" onChange = {this.onPasswordChange}/>
                            </Form.Group>
                            <Button variant="primary" onClick = {this.onSubmitSignIn}>Sign In</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        );

    }

}

export default SignIn ;

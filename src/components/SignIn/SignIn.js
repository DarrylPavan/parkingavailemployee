import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class SignIn extends React.Component {
    constructor (props) {
        super(props);
    
        this.state = {
            email: '',
            password: '',

        }

        


    }

    onEmailChange = (event) => {
        console.log(event.target.value); 
        //On change attribute for email check box
        this.setState({email: event.target.value});            
    }

    onPasswordChange = (event) => {
        console.log(event.target.value); 
        
        //On password attribute for password check box
        this.setState({password: event.target.value});
    }
    
    onSubmitSignIn = (event) => {
        console.log("got there");
        // Call /signin api returns a user object 
        
    }

    render () {
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
                <Button variant="primary" onClick = {this.onSubmitSignIn}>Submit</Button>
          </Form>
            </Col>
        </Row>
    </Container>
        );

    }

}

export default SignIn ;

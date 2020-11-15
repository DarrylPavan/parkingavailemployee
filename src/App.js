
import './App.css';
import React, {Component} from 'react';
import Navigation from './components/Navigation/Navigation'
import Availability from './components/Availability/Availability'
import ParkingLots from './components/ParkingLots/ParkingLots'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SignIn from './components/SignIn/SignIn'

class App extends Component {
  constructor() {
    super();
    this.state = {
      parkingLotId: '',
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        email: ''
      },
      refreshData: 0
    }
  }

  componentDidMount()
  {
    document.body.style = 'background: #75E6DA;';
  }

  onParkingLotChange = (parkingLotId) => {
    this.setState({parkingLotId: parkingLotId});
  }

  setSignIn = (isSignedIn) => {
    // window.localStorage.setItem('isSignedIn',isSignedIn)
    this.setState({isSignedIn: isSignedIn });
  }

  logout = () => {
    // window.localStorage.removeItem('isSignedIn')
    this.setState({isSignedIn: false });
  }

  loadUser = (user) => {
    this.setState({user: {
      id: user.id,
      name: user.name,
      email: user.email
    }});
  }

  // refreshState = () => {
  //   this.setState({refreshData: this.state.refreshData + 1});
  // }

  render() {
    return (
      <React.Fragment>
         <Router >
          {
            this.state.isSignedIn && 

            <Navigation logout={ this.logout }/>
          }     
                   
          <Switch>

            <Route exact path="/parkingavailemployee" 
              render={props => 
                (<SignIn {...props} 
                  setSignIn= {this.setSignIn} 
                  loadUser = {this.loadUser} />)}/>

            {
              this.state.isSignedIn && 

              <Route path="/parkingavailemployee/parkinglots" 
                render={props => 
                (<ParkingLots {...props}
                  onParkingLotChange = {this.onParkingLotChange}
                  userName = {this.state.user.name} />)}/>
            }

            {
              this.state.parkingLotId > 0 && this.state.isSignedIn && 

              <Route path="/parkingavailemployee/availability" 
                render={props => 
                (<Availability {...props} 
                  parkingLotId = {this.state.parkingLotId} />)}/>
            }

            {/* <Route exact path="/userInfoPage" component= {} />
            <Route exact path="/bbbbb" component= {Home} /> */}
          </Switch>
        </Router>
      </React.Fragment>            
       
    );
  }
}

export default App;

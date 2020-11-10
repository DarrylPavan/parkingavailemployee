
import './App.css';
import React, {Component} from 'react';
import Navigation from './components/Navigation/Navigation'
import Availability from './components/Availability/Availability'
import ParkingLots from './components/ParkingLots/ParkingLots'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      parkingLotId: ''
    }
  }
  componentDidMount()
  {
    
    document.body.style = 'background: #75E6DA;';
  }

  onParkingLotChange = (parkingLotId) => {
    this.setState({parkingLotId: parkingLotId});
  }

  render() {
    return (
      <React.Fragment>
        <Navigation />
        <Router >
          <Switch>
          <Route exact path="/parkingavailemployee" render={props => 
              (<ParkingLots {...props} onParkingLotChange = {this.onParkingLotChange} />)}/>
            {
              this.state.parkingLotId > 0 &&

            <Route path="/parkingavailemployee/availability" render={props => 
              (<Availability {...props} parkingLotId = {this.state.parkingLotId} />)}/>
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

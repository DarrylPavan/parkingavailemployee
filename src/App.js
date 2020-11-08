
import './App.css';
import React, {Component} from 'react';
import Navigation from './components/Navigation/Navigation'
import Availabilty from './components/Availability/Availabilty'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      
      <React.Fragment>
        <Navigation />
        <Router>
          <Switch>
            {/* <Route exact path="/" component= {ParkingLots} /> */}
            <Route path="/availability" component= {Availabilty} />
            {/* <Route exact path="/userInfoPage" component= {} />
            <Route exact path="/bbbbb" component= {Home} /> */}
          </Switch>
        </Router>
              
        
      </React.Fragment>

        
       
    );
  }
}

export default App;

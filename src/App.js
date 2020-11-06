
import './App.css';
import React, {Component} from 'react';
import Navigation from './components/Navigation/Navigation'
import Availabilty from './components/Availability/Availabilty'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Availabilty />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import HomePage from './pages/Home'
import Flower from './components/viewOrderService/Flower'
import './css/App.css';
import { Framework7App } from 'framework7-react';

import { routes } from './Ultilities/Routes'

class App extends Component {
  render() {
    return (
      <Framework7App routes={ routes }>
        <HomePage />
      </Framework7App>
    );
  }
}

export default App;

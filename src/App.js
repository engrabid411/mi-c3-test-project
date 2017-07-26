import React, { Component } from 'react'
import People from './components/People'
import AppBar from 'material-ui/AppBar'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar/>
        <People/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react'
import People from './components/People'
import AppBar from 'material-ui/AppBar'
import './App.css';
import Divider from 'material-ui/Divider'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar title='People List'/>
        <Divider />
        <People/>
      </div>
    );
  }
}

export default App;

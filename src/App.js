import { Component } from 'react';
import './App.css';
import Die from './Die.js';
import RollDice from './RollDice';

class App extends Component {
  render(){
    return (
      <div className="App">
        <RollDice />
      </div>
    );
  }
}

export default App;

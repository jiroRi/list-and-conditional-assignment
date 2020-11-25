import './App.css';
import React, { Component } from 'react';
import Validation from './components/ValidationComponent';
import Char from './components/CharComponent';

class App extends Component {

  state = {
    userInput: ''
  }

  inputLengthHandler = (event) => {
    this.setState({userInput: event.target.value})
  }

  render() {

    const charCount = {
      fontSize: '24px',
      fontWeight: 'bold'
    }

    return (
      <div className="App">
        <input type="text" onChange={this.inputLengthHandler} placeholder="Input something here.." value={this.state.userInput}/>
        <p>Character Count: <b style={charCount}>{this.state.userInput.length}</b></p>
        <Validation length={this.state.userInput.length}/>

        {
          this.state.userInput.split("").map(char => {
            return <Char character={char} color={Math.floor(Math.random() * 3)}/>
          })
        }
      </div>
    );
  }
}

export default App;

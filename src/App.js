import './App.css';
import React, { Component } from 'react';
import Validation from './ValidationComponent/ValidationComponent';
import Char from './CharComponent/CharComponent';

class App extends Component {

  state = {
    userInput: ''
  }

  inputLengthHandler = (event) => {
    this.setState({userInput: event.target.value});
  }

  deleteCharacterHandler = (charIndex) => {
    const input = this.state.userInput.split('');
    input.splice(charIndex, 1);
    const updatedInput = input.join('');
    this.setState({userInput: updatedInput});
  }

  render() {

    const charList = this.state.userInput.split('').map((char, index) => {
      return <Char 
        click={() => this.deleteCharacterHandler(index)}
        character={char}
        color={Math.floor(Math.random() * 3)}
        key={index}
      />
    })

    const charCount = {
      fontSize: '24px',
      fontWeight: 'bold'
    }

    return (
      <div className="App">
        <input type="text" onChange={this.inputLengthHandler} placeholder="Input something here.." value={this.state.userInput}/>
        <p>Character Count: <b style={charCount}>{this.state.userInput.length}</b></p>
        <Validation length={this.state.userInput.length}/>
        {charList}
      </div>
    );
  }
}

export default App;

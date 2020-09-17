import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.handleclick = this.handleclick.bind(this)
  }

  handleclick() {
    console.log('Clicou');
  }
  render() {
    return <button onClick={this.handleclick}>My Button1</button>;
  }
}

export default App;

import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.handleclick1 = this.handleclick1.bind(this)
    this.state = {
      numeroDeClicks: 0
    }
    this.handleclick2 = this.handleclick2.bind(this)
    this.state = {
      numeroDeClicks: 0
    }
    this.handleclick3 = this.handleclick3.bind(this)
    this.state = {
      numeroDeClicks: 0
    }
  }

  handleclick1() {
    this.setState((estado, _props) => ({
      numeroDeClicks: estado.numeroDeClicks + 1
    }))
  }
  handleclick2() {
    this.setState((estado, _props) => ({
      numeroDeClicks: estado.numeroDeClicks + 1
    }))
  }
  handleclick3() {
    this.setState((estado, _props) => ({
      numeroDeClicks: estado.numeroDeClicks + 1
    }))
  }
  render() {
    console.log(this)
    return <div>
      <button onClick={this.handleclick1}>{this.state.numeroDeClicks}</button>;
      <button onClick={this.handleclick2}>{this.state.numeroDeClicks}</button>;
      <button onClick={this.handleclick3}>{this.state.numeroDeClicks}</button>;
      </div>
  }
}

export default App;

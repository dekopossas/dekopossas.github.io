import React from 'react';
import logo from './logo.svg';
import './App.css';

function handleclick() {
  console.log('Clicou no botão');
}

class App extends React.Component {
  render(){
    return <button onClick={handleclick}>My Button</button>;
  }
}

export default App;

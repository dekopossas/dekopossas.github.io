import React from 'react';
import './App.css';

function handleclick2() {
  console.log('Clicou no botão 2');
}
function handleclick3() {
  console.log('Clicou no botão 3');
}

class App extends React.Component {
  handleclick1() {
    console.log('Clicou no botão 1');
  }
  render(){
    return <div>
      <button onClick={this.handleclick1}>My Button1</button>;
      <button onClick={handleclick2}>My Button2</button>;
      <button onClick={handleclick3}>My Button3</button>;
      
      </div>
  }
}

export default App;

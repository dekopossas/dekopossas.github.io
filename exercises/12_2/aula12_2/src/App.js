import React from 'react';
import './App.css';
import colors from './data.js';


class App extends React.Component {
  constructor() {
    super();

    this.handledChange = this.handledChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      filterText: "",
      xablauClicks: 0,
    }
  }

  handleClick() {
    this.setState((estado, _props) => ({xablauClicks: estado.xablauClicks + 1 }));
  }

  handledChange(event) {
    this.setState({ filterText: event.target.value });
  }

  render () {
    return <div>
      <div><input type="text" onChange={this.handledChange} /></div>
  <button onClick={this.handleClick}>{this.state.xablauClicks}Xablaus!</button>
      {colors.filter((color) => color.name === this.state.filterText).map((color, index) => (<div key={index}>{color.name}</div>))}
    </div>
  };
}

export default App;

import React from 'react';
import Cidade from './Cidade.js'
import Name from './Name.js'

class Form extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this)

    this.state = {
      cidade: '',
      name: '',
      idade: '',
      text: '',
      confirmado: false,
    };
  }

  handleChange({ target }) {
    const { name } = target
    const value = target.type === 'checkbox' ? target.checked : target.value
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <form className="form">
        <Cidade
          value={this.state.cidade}
          handleChange={this.handleChange}
        />
        <br />
        <Name
          value={this.state.name}
          handleChange={this.handleChange}
        />
        <br />
        <label for="idade">
          Idade:
          <input 
            name="idade" 
            type="textnumber"
            value={this.state.idade}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label for="text">
          Texto:
          <textarea 
            name="text" 
            value={this.state.text} 
            onChange={this.handleChange} 
          />
        </label>
        <br />
        <label>Confirmado:
        <input
          type="checkbox"
          name="confirmado"
          value={this.state.confirmado}
          onChange={this.handleChange}
        />
        </label>
        <br />
        <label>arquive:
        <input type="file" />
        </label>
        
      </form>
      
    );
  }
}

export default Form;

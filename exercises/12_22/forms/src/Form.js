import React from 'react';

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
        <label for="cidade">
          Cidade:
          <select 
            name="cidade" 
            className="cidade"
            value={this.state.cidade}
            onChange={this.handleChange}
          >
            <option value="value0"> </option>
            <option value="value1">bh</option>
            <option value="value2">rj</option>
            <option value="value3">sp</option>
          </select>
        </label>{' '}
        <br />
        <label for="name">
          Nome:
          <input 
            type="text"
            name="name" 
            value={this.state.name}
            onChange={this.handleChange} 
          />
        </label>
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
          value={this.state.check}
          onChange={this.handleChange}
        />
        </label>
      </form>
    );
  }
}

export default Form;

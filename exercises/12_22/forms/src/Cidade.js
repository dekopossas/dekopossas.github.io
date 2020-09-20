import React from 'react';

class Cidade extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label for="cidade">
        Cidade:
        <select
          name="cidade"
          className="cidade"
          value={value}
          onChange={handleChange}
        >
          <option value="value0"> </option>
          <option value="value1">bh</option>
          <option value="value2">rj</option>
          <option value="value3">sp</option>
        </select>
      </label>
    );
  }
}

export default Cidade;

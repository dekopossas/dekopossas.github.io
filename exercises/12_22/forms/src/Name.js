import React from 'react';

class Name extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label for="name">
        Nome:
        <input 
          type="text"
          name="name"
          value={value}
          onChange={handleChange}
        />
      </label>
    );
  }
}

export default Name;

import React from 'react';
import PropTypes from 'prop-types';
import addAssignment from './action';

class InputsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {textValue: ''};
  }

  render() {
    const { add } = this.props;
    const { textValue } = this.state;
  
    return (
      <div>
        <input
          type="text"
          placeholder="Digitar Tarefa"
          onClick={ (event) => this.setState({ textValue: textValue }) }
        />
        <button type="button" onClick={ () => add(textValue) }>
          Adicionar Tarefa
        </button>
      </div>
    )
  
  }

}

const mapDispatchToProps = (dispatch) => ({
  add: () => dispatch(addAssignment(value))
})

export default connect(null, mapDispatchToProps)(InputsList)

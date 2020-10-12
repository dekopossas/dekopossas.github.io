import React, { Component } from 'react';

class Pokemon extends Component {
    render() {
        return <div>
            <span>{this.props.name}</span>
            <span>{this.props.type}</span>
            <span>{this.props.value}{this.props.unit}</span>
            <img src={this.props.image}></img>
        </div>
    }
}

export default Pokemon;
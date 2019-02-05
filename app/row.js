import React, { Component } from 'react';
import Cell from './cell';

class Row extends Component {
  constructor (props) {
    super(props);
    this.state  = {

    }
  }

  render () {
    return (
      <div className="row">
        {this.props.size.map(() => {
          return <Cell draw={this.props.draw} drawing={this.props.drawing} color={this.props.color} key={Math.random()}/>
        })}
      </div>
    )
  }
}

export default Row;

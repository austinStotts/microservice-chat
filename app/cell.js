import React, { forwardRef, Component } from 'react';

class Cell extends Component{
  constructor (props) {
    super(props);
    this.state={
      class: {
        backgroundColor:'white',
        width: '20px',
        height: '20px',
        border: 'none',
        borderLeft: '1px solid black',
        borderTop: '1px solid black',
        display: 'inline-block',
        margin: '0px',
        padding: '0px ',
        outline: 'none',
        cursor: 'pointer',
      },
      fill: false
    }
    this.click = this.click.bind(this);
    this.draw = this.draw.bind(this);
  }

  click () {
    if(!this.state.fill) {
      this.setState({
        class: {
          backgroundColor:this.props.color,
          width: '20px',
          height: '20px',
          border: 'none',
          borderLeft: '1px solid black',
          borderTop: '1px solid black',
          display: 'inline-block',
          margin: '0px',
          padding: '0px ',
          outline: 'none',
          cursor: 'pointer',
        },
        fill: !this.state.fill
      })
    }
    else {
      this.setState({
        class: {
          backgroundColor:'white',
          width: '20px',
          height: '20px',
          border: 'none',
          borderLeft: '1px solid black',
          borderTop: '1px solid black',
          display: 'inline-block',
          margin: '0px',
          padding: '0px ',
          outline: 'none',
          cursor: 'pointer',
        },
        fill: !this.state.fill
      })
    }
  }

  draw () {
    if(this.props.drawing) {
      this.setState({
        class: {
          backgroundColor:this.props.color,
          width: '20px',
          height: '20px',
          border: 'none',
          borderLeft: '1px solid black',
          borderTop: '1px solid black',
          display: 'inline-block',
          margin: '0px',
          padding: '0px ',
          outline: 'none',
          cursor: 'pointer',
        },
        fill: true
      })
    }
  }

  render() {
    return (
      <div className="cell-div">
        <button 
          onMouseDown={() => {
            this.props.draw();
            this.click();
          }} 
          onMouseUp={this.props.draw} 
          onMouseOver={this.draw} 
          style={this.state.class}>
        </button>
      </div>
    )
  }
}

export default Cell;

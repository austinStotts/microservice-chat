import React, { forwardRef, PureComponent } from 'react';

class Cell extends PureComponent {
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
    this.setState({
      class: {
        backgroundColor:this.props.color,
        width: '20px',
        height: '20px',
        border: 'none',
        borderRadius: '50%',
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

  render() {
    return (
      <div className="cell-div">
        <button 
          onMouseDown={() => {
            console.log('down !!!')
            this.click();
          }}
          draggable
          onDragEnter={this.draw}
          //onMouseUp={this.props.draw} 
          //onMouseOver={this.draw} 
          style={this.state.class}>
        </button>
      </div>
    )
  }
}

export default Cell;

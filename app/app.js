import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import Row from './row';

class App extends PureComponent {
  constructor () {
    super()
    this.state = {
      size: new Array(40).fill(0),
      color: 'red',
      drawing: false
    }
    this.draw = this.draw.bind(this);
  }

  draw () {
    this.setState({
      drawing: !this.state.drawing
    })
  }


  // kjsi
  render () {
    return (
      <div className="main-div">
        {this.state.size.map(() => {
          return <Row color={this.state.color} draw={this.draw} drawing={this.state.drawing} key={Math.random()} size={this.state.size}/>
        })}
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));

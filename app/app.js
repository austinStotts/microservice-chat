import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';

class App extends PureComponent {
  constructor () {
    super()
    this.state = {
      size: 10,
      mines: 10
    }
  }

  render () {
    return (
      <div>
        {for(let i = 0; i < this.state.size; i++) {
          return <h1>hello</h1>
        }}
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));

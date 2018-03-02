import React, { Component } from 'react';
import ReactDOM from 'react-dom'

class App extends Component {
  render() {
    return (
      <div>You ready to Collab? </div>
    )
  }
}

//tell React to render HTML in the DOM
ReactDOM.render(<App />, document.querySelector('.container'))

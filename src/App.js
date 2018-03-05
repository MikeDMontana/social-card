import React, { Component } from 'react';
import logo from './logo.svg';
import { Link, Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
          <div>
            {this.props.children}
          </div>
      </div>
    );
  }
}

export default App;

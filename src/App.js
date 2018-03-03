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
        <div className="wrapper">
          <header className="App-header">
            <h1 className="App-title">Mike Dreiling</h1>
            <p>
              Im just a dude looking to get right back into code.  But above all, I love
              to create things.
            </p>
          </header>
          <div className="logoBoxA">
            <Link to="/a"><h2>A</h2></Link>
          </div>
          <div className="logoBoxB">
            <Link to="/b"><h2>B</h2></Link>
          </div>
          <div className="logoBoxC">
            <Link to="/c"><h2>C</h2></Link>
          </div>
          <div>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

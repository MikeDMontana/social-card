import React, { Component } from 'react';
import { createStore } from 'redux';

class A extends Component {
  constructor(props) {
    super(props);
  }

  test = () => {
    console.log("hello");
  }

  render() {
    return(
      <div className="aContainer">
        <h2>Component A</h2>
        {this.test()}
      </div>
    );
  }
}

export default A;

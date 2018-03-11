import React, { Component } from 'react';
import { createStore } from 'redux';
import expect from 'expect';

const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      if (state === 0) {
        return state - 0;
      } else {
        return state - 1;
        }
    default:
      return state;
  }
}

const store = createStore(counter);
store.dispatch({ type: 'DECREMENT' });

class A extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counterNum:0
    }
  }

  plusClick = () => {
    store.dispatch({ type: 'INCREMENT' });
    console.log(store.getState());
    this.setState({
      counterNum:store.getState()
    });
  }

  minusClick = () => {
    store.dispatch({ type: 'DECREMENT' });
    console.log(store.getState());
    this.setState({
      counterNum:store.getState()
    });
  }

  render() {
    return(
      <div className="aContainer">
        <h2>Component A</h2>
        <button onClick={this.plusClick.bind(this)}>+</button>
        <button onClick={this.minusClick.bind(this)}>-</button>
        <p>{this.state.counterNum}</p>
      </div>
    );
  }
}

export default A;

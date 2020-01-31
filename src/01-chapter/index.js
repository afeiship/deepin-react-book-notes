import React, { Component } from 'react';
class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    console.log(e);
  }
  render() {
    return <button onClick={this.handleClick}>Test</button>;
  }
}

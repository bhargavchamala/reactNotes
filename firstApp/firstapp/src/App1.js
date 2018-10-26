import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
var name={'bhargav','anusha'};
class App1 extends Component {
  render() {
    return (
      <div className="App1">
vigga you gotta sit out
  name.map(function(name,index){
  return<div key={index}>Hello, {name}!</div>})
      </div>
    );
  }
}

export default App1;

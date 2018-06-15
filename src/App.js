import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Div, Header, Img, H1, P } from 'lemon-reset';

class App extends Component {
  render() {
    return (
      <Div className="App">
        <Header className="App-header">
          <Img src={logo} className="App-logo" alt="logo" />
          <H1 className="App-title">Welcome to Hello world!</H1>
        </Header>
        <P className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </P>
      </Div>
    );
  }
}

export default App;

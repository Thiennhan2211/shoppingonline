import './App.css';
import { BrowserRouter } from 'react-router-dom';
import React, { Component } from 'react';
import Main from './components/MainComponent';
import MyProvider from './contexts/MyProvider';

class App extends Component {
  render() {
    return (
      <MyProvider>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </MyProvider>
    );
  }
}

export default App;
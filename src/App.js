import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import logo from './logo.svg';
import './App.css';
import VisitsPage from './components/Visits';
import { client } from './apollo/client';

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <VisitsPage />
          </header>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;

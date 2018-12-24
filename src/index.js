import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ServerUnreachable } from './components/ServerUnreachable';

const root = document.getElementById('root');
const pingAndRender = async () => {
  try {
    await fetch(process.env.REACT_APP_GRAPHQL_SERVER);
    render(App, root);
  } catch (error) {
    render(ServerUnreachable, root);
  }
}
const render = (Component, selector) => ReactDOM.render(<Component />, selector);

pingAndRender();

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';

const MyApp = () => (
  <Router>
    <App />
  </Router>
)

ReactDOM.render(<MyApp />, document.getElementById('root'));

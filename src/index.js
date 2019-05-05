import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import { SubmissionProvider } from './context'

import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
  <SubmissionProvider>
    <Router>
      <App />
    </Router>
  </SubmissionProvider>, document.getElementById('root'));

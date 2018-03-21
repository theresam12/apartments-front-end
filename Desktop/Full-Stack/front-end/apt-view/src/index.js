import React from 'react';
import ReactDOM from 'react-dom';
// import '../index.css';
import registerServiceWorker from './registerServiceWorker';
import './css/index.css';
import App from './components/App';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './components/Login';

ReactDOM.render(
  <Router>
    <div>
      <Route
        exact
        path= '/'
        component= {App}
      />
      <Route
        exact
        path="/login"
        component={Login}
      />
    </div>
  </Router>
, document.getElementById('root'));
registerServiceWorker();

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

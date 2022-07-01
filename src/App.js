import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import Routes from './routes'

const App = () => (
  <Router>
    <Switch>
      <Routes />
    </Switch>
  </Router>
)
export default App;

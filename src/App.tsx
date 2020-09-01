import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
          <Route path='/'><>Hello World</></Route>
      </Switch>
    </Router>
  );
}

export default App;

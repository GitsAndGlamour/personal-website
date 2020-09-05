import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route, Link,
} from 'react-router-dom'
import Admin from "./admin/Admin";

function App() {
  return (
    <Router>
        <div>
          <nav>
              <ul>
                  <li>
                      <Link to='/'>Home</Link>
                  </li>
                  <li>
                      <Link to='/blog'>Blog</Link>
                  </li>
                  <li>
                      <Link to='/tutorials'>Tutorials</Link>
                  </li>
                  <li>
                      <Link to='/portfolio'>Portfolio</Link>
                  </li>
                  <li>
                      <Link to='/contact'>Contact Me</Link>
                  </li>
                  <li>
                      <Link to='/hire'>Hire Me</Link>
                  </li>
              </ul>
          </nav>
          <Switch>
              <Route path='/blog'><>Blog</></Route>
              <Route path='/tutorials'><>Tutorials</></Route>
              <Route path='/portfolio'><>Portfolio</></Route>
              <Route path='/contact'><>Contact</></Route>
              <Route path='/hire'><>Hire</></Route>
              <Route path='/admin'><Admin/></Route>
              <Route path='/'><>Hello World</></Route>
              <Route path='*'><>404 Page Not Found</></Route>
          </Switch>
        </div>
    </Router>
  );
}

export default App;

import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./components/Home";
// import About from "./components/About";
// import Topics from "./components/Topics";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {/* <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li> */}
          </ul>
          <Route exact={true} path="/" component={Home} />
          {/* <Route exact={true} path="/about" component={About}/>
          <Route exact={true} path="/topics" component={Topics}/> */}
        </div>
      </Router>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import render from 'react-dom';
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Login from './components/Login'
import Profile from './components/Profile'
import Register from './components/Register'
import UserFunction from './components/UserFunction'
import Staff from './components/Staff'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/staff" component={Staff} />

          </div>
        </div>
      </Router>
    )
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './Main.js';
import Login from './pages/Login.js';
import Register from './pages/Register.js';
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">

        <Switch>

         <Route path="/login" component={Login}></Route>
         <Route path="/register" component={Register}></Route>
         <Main />
         </Switch>

      </div>
      </Router>
    );
  }
}

export default App;

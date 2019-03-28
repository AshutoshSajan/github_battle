import React, { Component } from 'react';
import Popular from './Popular'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from './Nav';
import './main.scss'
import Home from './Home';
import Battle from './Battle';
import './Loading.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div  className='container'>
          <Nav />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/Battle' component={Battle} />
            <Route path='/Popular' component={Popular} />
            <Route render={()=> <p>Not Found</p>}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

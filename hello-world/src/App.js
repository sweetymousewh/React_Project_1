import React, { Component } from 'react';

import './App.css';
import Header from './component/H1';
import { Alert } from 'reactstrap';
import Home from './contentPage/homepage';
import Contact_us from './contentPage/contact_us';
import List from './contentPage/list';
import Records from './contentPage/records';
import { BrowserRouter as Router, Route} from 'react-router-dom'


class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <div>
                <Header />
                <Route path="/home" component={Home} />
                <Route path="/list" component={List}/>
                <Route path="/records" component={Records}/>
                <Route path="/contact_us" component={Contact_us}/>
            </div>
            <Alert>
            <p>
              To get started, edit <code>src/App.js</code> and save to reload.
            </p></Alert>
          </div>
        </Router>
    );
  }
}



export default App;

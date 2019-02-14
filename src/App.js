import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import List from './List';
import Person from './Person';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={List} />
          <Route path="/:id" component={Person} />
        </Switch>
      </Router>
    );
  }
}
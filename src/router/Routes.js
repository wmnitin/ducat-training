import React from 'react';

import { Route, BrowserRouter, Switch, Link } from 'react-router-dom'
import About from '../components/About/About';
import Homepage from '../components/Homepage/HomepageContainer';

export default class Routes extends React.Component {

  render() {
    return (
      <BrowserRouter>

        <Switch>
          <Route path='/' exact>
            <Homepage />
          </Route>
          <Route path='/about'>
            <About />
          </Route>

        </Switch>

      </BrowserRouter>
    )
  }

}
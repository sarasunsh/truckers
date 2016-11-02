'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'
import Root from './components/Root'
import AppContainer from './components/AppContainer';
import Login from './components/Login'
import Navbar from './components/Navbar'

render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={AppContainer} />
      <Route path="/login" component={Login} />
    </Router>
  </Provider>,
  document.getElementById('main')
)

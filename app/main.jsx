'use strict'
import React from 'react'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import {render} from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'
// import AppContainer from './components/AppContainer';
import App from './components/App/App';
import Login from './components/Login/Login'
import SingleTruck from './components/SingleTruck/SingleTruck'
import MainPage from './components/MainPage'


render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="/trucks" component={MainPage} />
        <Route path="/trucks/:truckID" component={SingleTruck} />
        <IndexRoute component={MainPage} />
      </Route>
      <Route path="/login" component={Login} />
    </Router>
  </Provider>,
  document.getElementById('main')
)

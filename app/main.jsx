'use strict'
import React from 'react'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'

// Component import
import App from './components/App/App';
import Login from './components/Login/Login'
import SingleTruckContainer from './components/SingleTruck/SingleTruckContainer'
import AllTrucks from './components/AllTrucks'

// Dispatcher import
import { fetchTrucksFromServer } from './reducers/trucks';
import { fetchSingleTruckFromServer } from './reducers/singleTruck';

// onEnter prompts ----------------------------------------------------
const onTrucksEnter = function () {
  const thunk = fetchTrucksFromServer();
  store.dispatch(thunk);
};

const onSingleTruckEnter = function (nextRouterState) {
  const truckID = nextRouterState.params.truckID;
  const thunk = fetchSingleTruckFromServer(truckID);
  store.dispatch(thunk);
};

// React-Router--------------------------------------------------------
render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="/trucks" component={AllTrucks} onEnter={onTrucksEnter}/>
        <Route path="/trucks/:truckID" component={SingleTruckContainer} onEnter={onSingleTruckEnter}/>
        <IndexRoute component={AllTrucks}  onEnter={onTrucksEnter}/>
      </Route>
      <Route path="/login" component={Login} />
    </Router>
  </Provider>,
  document.getElementById('main')
)

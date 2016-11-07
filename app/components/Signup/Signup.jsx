import React from 'react'

export const Signup = () => (
  <form onSubmit={evt => {
    evt.preventDefault()
    login(evt.target.username.value, evt.target.password.value)
  } }>
    <input name="username" />
    <input name="password" type="password" />
    <input type="submit" value="Signup" />
  </form>
)

import {signup} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

export default connect (
  state => ({}),
  dispatch => ({
    signup(username, password) {
      return dispatch(signup(username, password))
    }
  }),
) (Signup)

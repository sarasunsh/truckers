import React, { Component } from 'react'
import { Link } from 'react-router'
import { Button, Col, ControlLabel, FormControl, FormGroup } from 'react-bootstrap'
import OurNav from '../OurNav'

export class Login extends Component {

  render() {

      return (
          <div>
              <Col md={4} mdPull={4} mdPush={4} sm={6} smPull={3} smPush={3} xs={12}>
                  <form onSubmit={evt => {
                      evt.preventDefault()
                      this.props.loginSubmit(evt.target.email.value, evt.target.password.value)
                  } }>
                      <FormGroup>
                          <ControlLabel>Email</ControlLabel>
                          <FormControl name="email" />
                          <ControlLabel>Password</ControlLabel>
                          <FormControl name="password" type="password" />
                          <Button type="submit">Login</Button>
                      </FormGroup>
                  </form>
                  <div>
                    <span>Register for an <Link to={`/signup`}>Account</Link></span>
                  </div>
              </Col>
          </div>
     )
  }
}

import {login} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

const mapDispatch = dispatch => {
    return {
        loginSubmit: (email, password) => {
        dispatch(login(email, password))
    }}
}

export default connect (
    null, mapDispatch
) (Login)

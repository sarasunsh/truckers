import React, { Component } from 'react'
import { Button, Col, ControlLabel, FormControl, FormGroup } from 'react-bootstrap'
import OurNav from '../OurNav'

export class Signup extends Component {

  render() {

      return (
          <div>
              <Col md={4} mdPull={4} mdPush={4} sm={6} smPull={3} smPush={3} xs={12}>
                  <form onSubmit={evt => {
                      evt.preventDefault()
                      this.props.signupSubmit(evt.target.name.value, evt.target.email.value, evt.target.password.value)
                  } }>
                      <FormGroup>
                          <ControlLabel>Your Full Name</ControlLabel>
                          <FormControl name="name" />
                          <ControlLabel>Email</ControlLabel>
                          <FormControl name="email" />
                          <ControlLabel>Password</ControlLabel>
                          <FormControl name="password" type="password" />
                          <Button type="submit">Signup!</Button>
                      </FormGroup>
                  </form>
              </Col>
          </div>
     )
  }
}

import {signup} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

const mapDispatch = dispatch => {
    return {
        signupSubmit: (name, email, password) => {
        dispatch(signup(name, email, password))
    }}
}

export default connect (
    null, mapDispatch
) (Signup)

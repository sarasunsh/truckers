import React, { Component } from 'react';
import { Link } from 'react-router'
import { Navbar, Nav, NavItem, FormGroup, FormControl, Button, Glyphicon } from 'react-bootstrap';

export default (props) => {
    // 'user' is pulled from the 'auth' property of our state. if exists, we provide a Welcome
    // and switch the 'log in' button to a 'log out'. 'logoutHandler' handles a logout request
    // on user click
    const { user, logoutHandler } = props;

    return (
        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    <Link to={`/`}>Truckers</Link>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Navbar.Form pullLeft>
                  <Button type="submit">
                      <Glyphicon glyph="map-marker" />
                  </Button>
                  <FormGroup>
                      <FormControl type="text" placeholder="10 Hanover Square, NYC" />
                  </FormGroup>
                      {' '}
              </Navbar.Form>
              <Navbar.Form pullLeft>
                  <Button type="submit">
                      <Glyphicon glyph="search" />
                  </Button>
                  <FormGroup>
                      <FormControl type="text" placeholder="Hungry?" />
                  </FormGroup>
                      {' '}
              </Navbar.Form>
              <Nav pullRight>
                  <NavItem>
                      { user === null ? `` : `Welcome, ${props.user.name}`}
                  </NavItem>
                  <NavItem eventKey={1}>
                      <Glyphicon glyph="shopping-cart" />
                  </NavItem>
                  <NavItem eventKey={2}>
                      { user === null ? (<Link to={`/login`}>Log In</Link>) : (<Link to={`/`} onClick={() => logoutHandler()}>Log Out</Link>) }
                  </NavItem>
              </Nav>
          </Navbar.Collapse>

      </Navbar>

    )
}

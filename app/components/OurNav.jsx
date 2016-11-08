import React, { Component } from 'react';
import { Link } from 'react-router'
import { Navbar, Nav, NavItem, FormGroup, FormControl, Button, Glyphicon } from 'react-bootstrap';

export default (props) => {
    console.log(props);
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
                      { props.user === null ? `` : `Welcome, ${props.user.name}`}
                  </NavItem>
                  <NavItem eventKey={1}>
                      <Glyphicon glyph="shopping-cart" />
                  </NavItem>
                  <NavItem eventKey={2}>
                      { props.user === null ? (<Link to={`/login`}>Log In</Link>) : (<Link to={`/`}>Log Out</Link>) }
                  </NavItem>
              </Nav>
          </Navbar.Collapse>

      </Navbar>

    )
}

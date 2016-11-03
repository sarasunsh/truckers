import React, { Component } from 'react';
import { Navbar, Nav, NavItem, FormGroup, FormControl, Button, Glyphicon } from 'react-bootstrap';

export default class OurNav extends Component {
  constructor() {
    super()
    this.state = {};
  }

  render() {

    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Truckers</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Navbar.Form pullLeft>
            <Button type="submit"><Glyphicon glyph="map-marker" /></Button>
            <FormGroup>
              <FormControl type="text" placeholder="10 Hanover Square, NYC" />
            </FormGroup>
            {' '}
          </Navbar.Form>
          <Navbar.Form pullLeft>
            <Button type="submit"><Glyphicon glyph="search" /></Button>
            <FormGroup>
              <FormControl type="text" placeholder="What are you looking for?" />
            </FormGroup>
            {' '}
          </Navbar.Form>
          <Nav pullRight>
            <NavItem eventKey={1} href="#"><Glyphicon glyph="shopping-cart" /></NavItem>
            <NavItem eventKey={2} href="#">Log In</NavItem>
          </Nav>
        </Navbar.Collapse>

      </Navbar>

    )
  }
}

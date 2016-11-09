import React, { Component } from 'react';
import { Link } from 'react-router'
import {Row, Col, Navbar, Nav, NavItem, FormGroup, FormControl, Button, Glyphicon } from 'react-bootstrap';

export default (props) => {
// 'user' is pulled from the 'auth' property of our state. if exists, we provide a Welcome
// and switch the 'log in' button to a 'log out'. 'logoutHandler' handles a logout request
// on user click
const { user, logoutHandler } = props;

    return (
        <div className='customNav'>
            <div className='logoDiv navSection'>
                <Link to={`/`}>    
                    <img src="./trucker.png" className="logo"/>
                </Link>    
            </div>
            <div className='verticalDivider' />
            <div className='searchSection navSection'>
                <input type="text" className="search locationIcon" placeholder="Where are you located?"/>
                <div className='verticalDivider' />
                <input type="text" className="search searchIcon" placeholder="What would you like to eat?" />  
                <div className='verticalDivider' />
            </div>
            <div className='navButtonSection navSection'>
                <div className='navButton'>
                    <span>
                        { user === null ? `` : <Link to={`/profile/${user.id}`}>{`Welcome, ${props.user.name}`}</Link>}
                    </span>
                </div>
                <div className='verticalDivider' />
                <div className='navButton'>
                    <span>
                        { user === null ? (<Link to={`/login`}>Log In</Link>) : (<Link to={`/`} onClick={() => logoutHandler()}>Log Out</Link>) }
                    </span>
                </div>
                <div className='verticalDivider' />
                <div className='navButton'>
                    <img src="./shopping_bag_icon.png" className="shoppingBagIcon"/>
                </div>
                <div className='verticalDivider' />
            </div>
        </div>

    )
}

// <div style={{width:'180px', display:'inline-block'}}>
//                 <Link to={`/`}>
//                     <img src="./trucker.png" className="logo"/>
//                 </Link>
//             </div>
//             <Row style={{display:'inline-block'}}>
//                 <Col xs={8}>
//                     <div className='navItem' style={{width:'50%'}}>
//                         <input className="search locationIcon" />
//                     </div>
//                     <div className='navItem' style={{width:'50%'}}>
//                         <input className="search searchIcon" />
//                     </div>
//                 </Col>
//                 <Col xs={4}>
//                     <div className='navItem'>
//                         { user === null ? `` : <Link to={`/profile/${user.id}`}>{`Welcome, ${props.user.name}`}</Link>}
//                     </div>
//                     <div className='navItem'>
//                         <Glyphicon glyph='shopping-cart' />
//                     </div>
//                     <div className='navItem'>
//                         { user === null ? (<Link to={`/login`}>Log In</Link>) : (<Link to={`/`} onClick={() => logoutHandler()}>Log Out</Link>) }
//                     </div>
//                 </Col>                
//             </Row>


        // <Navbar>
        //     <Navbar.Header>
        //         <Navbar.Brand>
        //             <Link to={`/`}>Truckers</Link>
        //         </Navbar.Brand>
        //         <Navbar.Toggle />
        //     </Navbar.Header>
        //     <Navbar.Collapse>
        //     <Navbar.Form pullLeft>
        //     <Button type="submit">
        //     <Glyphicon glyph="map-marker" />
        //     </Button>
        //     <FormGroup>
        //     <FormControl type="text" placeholder="10 Hanover Square, NYC" />
        //     </FormGroup>
        //     {' '}
        //     </Navbar.Form>
        //     <Navbar.Form pullLeft>
        //     <Button type="submit">
        //     <Glyphicon glyph="search" />
        //     </Button>
        //     <FormGroup>
        //     <FormControl type="text" placeholder="Hungry?" />
        //     </FormGroup>
        //     {' '}
        //     </Navbar.Form>
        //     <Nav pullRight>
        //     <NavItem>
        //     { user === null ? `` : <Link to={`/profile/${user.id}`}>{`Welcome, ${props.user.name}`}</Link>}
        //     </NavItem>
        //     <NavItem eventKey={1}>
        //     <Glyphicon glyph="shopping-cart" />
        //     </NavItem>
        //     <NavItem eventKey={2}>
        //     { user === null ? (<Link to={`/login`}>Log In</Link>) : (<Link to={`/`} onClick={() => logoutHandler()}>Log Out</Link>) }
        //     </NavItem>
        //     </Nav>
        //     </Navbar.Collapse>
        // </Navbar>
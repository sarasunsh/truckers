'use strict';

import { connect } from 'react-redux';
import App from './App';
import { logout } from '../../reducers/auth'

// pass the user as the 'auth' property on props
const mapStateToProps = state => ({
    auth: state.auth
})

// pass the logout function as a handler 
const mapDispatchToProps = dispatch => ({
    logoutHandler: () => {
        dispatch(logout())
    }
})

export default connect(
    mapStateToProps, mapDispatchToProps
)(App);

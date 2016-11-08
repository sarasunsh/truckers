import { browserHistory } from 'react-router'

// -=-=-=-= Reducer =-=-=-=-
// if authenticated, route from login or signup back to the main page
// and add the user object to the store. If logged-out, return null.
const reducer = (state=null, action) => {
    switch(action.type) {
    case AUTHENTICATED:
        // browserHistory.push('/')
        return action.user;
    case LOGGED_OUT:
        // browserHistory.push('/')
        return null
    default: return state
    }
}

// -=-=-=-= Actions =-=-=-=-=-
const AUTHENTICATED = 'AUTHENTICATED'
const LOGGED_OUT = 'LOGGED_OUT'

// -=-=-=-= Action-Creators =-=-=-=-
export const authenticated = user => ({
    type: AUTHENTICATED, user
})

export const loggedOut = () => ({
    type: LOGGED_OUT, user: null
})

import axios from 'axios'

// we can log-in with a call to our auth passport api, then a dispatch
// call to whoami to add the authenticated user to the store (as 'auth')
export const login = (username, password) =>
    dispatch => {
        const body = {username, password}
        console.log('req body=', body)
        return axios.post('/api/auth/local/login', body)
            .then(() => dispatch(whoami()))
    }

// Calls our log out action-creator for the reducer and
// logs out with passport via a an auth routing
export const logout = () =>
    dispatch => {
        dispatch(loggedOut())
        return axios.get('/api/auth/logout')
            .catch()
    }

// Our sign-up first adds the user to the database and then sneaks straight
// over to authentication to avoid login
export const signup = (name, email, password) =>
    dispatch => {
        const body = {name, email, password}
        console.log('req body=', body)
        return axios.post('/api/users', body)
            .then((res) => dispatch(authenticated(res.data)))
    }

// whoami is our utility function to transform a user to an authenticated
// user by asking passport if the user is valid, and then dispatching an
// authentication call to add the user to the 'auth' prop on the store
export const whoami = () =>
    dispatch =>
        axios.get('/api/auth/whoami')
            .then(response => {
                const user = response.data
                if (!Object.keys(user).length) {
                    return dispatch(authenticated(null))
                }
                dispatch(authenticated(user))
            })

export default reducer

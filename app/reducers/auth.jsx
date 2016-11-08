import { browserHistory } from 'react-router'

// if authenticated, route from login or signup back to the main page
// and add the user object to the store 
const reducer = (state=null, action) => {
    switch(action.type) {
    case AUTHENTICATED:
        browserHistory.push('/')
        return action.user
    }
    return state
}

// if authenticated, pass the user data as an object
const AUTHENTICATED = 'AUTHENTICATED'
export const authenticated = user => ({
    type: AUTHENTICATED, user
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

// I'M NOT YET FUNCTIONAL!
export const logout = () =>
    dispatch => {
        return axios.get('/api/auth/logout')
            .then(() => dispatch(authenticated(null)))
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
// authentication call to the store
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

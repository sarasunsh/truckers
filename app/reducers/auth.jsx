import { browserHistory } from 'react-router'

const reducer = (state=null, action) => {
    switch(action.type) {
    case AUTHENTICATED:
        browserHistory.push('/')
        return action.user
    }
    return state
}

const AUTHENTICATED = 'AUTHENTICATED'
export const authenticated = user => ({
    type: AUTHENTICATED, user
})

import axios from 'axios'

export const login = (username, password) =>
    dispatch => {
        const body = {username, password}
        console.log('req body=', body)
        return axios.post('/api/auth/local/login', body)
          .then(() => dispatch(whoami()))
    }

export const signup = (name, email, password) =>
    dispatch => {
        const body = {name, email, password}
        console.log('req body=', body)
        return axios.post('/api/users', body)
          .then((res) => dispatch(authenticated(res.data)))
    }

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

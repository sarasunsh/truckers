import store from '../store'
import axios from 'axios';

// -=-=-=-= ACTIONS =-=-=-=-

const LOAD_CURRENT_USER = "LOAD_CURRENT_USER";

// ACTION-CREATORS--------------------------------------------------------
export const loadCurrentUser = (fetchedUser) => {
    return {
        type: LOAD_CURRENT_USER,
        loadedUser: fetchedUser
    }
}

// DISPATCHERS/THUNKS --------------------------------------------------------
export const fetchSingleUserFromServer = (userID) => {
    const thunk = (dispatch) => {
        const getUser = axios.get(`/api/profile/${userID}`);
        const getOrders = axios.get(`/api/profile/${userID}/orders`);
        const getReviews = axios.get(`/api/profile/${userID}/reviews`);

        Promise.all([getUser, getOrders, getReviews])
        .then(res =>  {
            const user = res[0].data;
            user.orders = res[1].data;
            user.reviews = res[2].data
            dispatch(loadCurrentUser(user));
        })
        .catch(err => console.log(err))
    }
    return thunk;
}


// REDUCER --------------------------------------------------------
const singleUserReducer = (state={orders:[], reviews:[]}, action) => {
    switch (action.type) {
        case LOAD_CURRENT_USER: return action.loadedUser
        default: return state
    }
}

export default singleUserReducer;

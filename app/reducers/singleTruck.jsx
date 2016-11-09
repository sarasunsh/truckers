import store from '../store'
import axios from 'axios';

// -=-=-=-= ACTIONS =-=-=-=-

const LOAD_CURRENT_TRUCK = "LOAD_CURRENT_TRUCK";

// ACTION-CREATORS--------------------------------------------------------
export const loadCurrentTruck = (fetchedTruck) => {
    return {
        type: LOAD_CURRENT_TRUCK,
        loadedTruck: fetchedTruck
    }
}

// DISPATCHERS/THUNKS --------------------------------------------------------
export const fetchSingleTruckFromServer = (truckID) => {
    const thunk = (dispatch) => {
        const getTruck = axios.get(`/api/trucks/${truckID}`);
        const getMenu = axios.get(`/api/trucks/${truckID}/menu`);
        const getReviews = axios.get(`/api/trucks/${truckID}/reviews`);

        Promise.all([getTruck, getMenu, getReviews])
        .then(res =>  {
            const truck = res[0].data;
            truck.menu = res[1].data;
            truck.reviews = res[2].data
            dispatch(loadCurrentTruck(truck));
        })
        .catch(err => console.log(err))
    }
    return thunk;
}

export const addNewReview = function(review, truckID) {
    const thunk = function(dispatch){
        axios.post(`/api/trucks/${truckID}/reviews`, review)
        .then(res => console.log(res.data))
    }
    return thunk;
}



// REDUCER --------------------------------------------------------
const singleTruckReducer = (state={menu:[], reviews:[]}, action) => {
    switch (action.type) {
        case LOAD_CURRENT_TRUCK: return action.loadedTruck
        default: return state
    }
}

export default singleTruckReducer;

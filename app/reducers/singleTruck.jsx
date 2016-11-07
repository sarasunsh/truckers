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

        Promise.all([getTruck, getMenu])
        .then(res =>  {
            const truck = res[0].data;
            truck.menu = res[1].data;
            dispatch(loadCurrentTruck(truck));
        })
        .catch(err => console.log(err))
    }
    return thunk;
}

// REDUCER --------------------------------------------------------
const singleTruckReducer = (state={menu:[]}, action) => {
    switch (action.type) {
        case LOAD_CURRENT_TRUCK: return action.loadedTruck
        default: return state
    }
}

export default singleTruckReducer;

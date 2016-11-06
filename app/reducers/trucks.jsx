import store from '../store'
import axios from 'axios';

// -=-=-=-= ACTIONS =-=-=-=-

const LOAD_ALL_TRUCKS = "LOAD_ALL_TRUCKS";
const ADD_NEW_TRUCK = "ADD_NEW_TRUCK";

// ACTION-CREATORS--------------------------------------------------------
export const loadAllTrucks = function(fetchedTrucks){
    return {
        type: LOAD_ALL_TRUCKS,
        loadedTrucks: fetchedTrucks
    }
}

export const receiveNewTruck = function(newTruck){
    return {
        type: ADD_NEW_TRUCK,
        newTruck: newTruck
    }
}

// DISPATCHERS/THUNKS --------------------------------------------------------
export const fetchTrucksFromServer = function(){
    const thunk = function(dispatch) {
        axios.get('/api/trucks')
        .then(res => dispatch(loadAllTrucks(res.data)))
        .catch(err => console.log(err))
    }
    return thunk;
}

export const addNewTruck = function(data) {
    const thunk = function(dispatch){
        axios.post('/api/trucks', data)
        .then(res => {
            const action = receiveNewTruck(res.data);
            dispatch(action)
        })
    }
    return thunk;
}

// export const removeArm = function(id) {
//     console.log('removeArm', id)
//     const thunk = function(dispatch){
//         axios.delete(`/api/experiment/${id}`)
//         .then(res => {
//             const action = removeDeletedArm(res.data)
//             dispatch(action)
//         })
//         .catch(err => console.error(`Removing story: ${id} unsuccesful`, err))
//     }
//     return thunk;
// }


// REDUCER --------------------------------------------------------
export default function trucksReducer(state=[], action){
    switch (action.type){
        case LOAD_ALL_TRUCKS: return  action.loadedTrucks
        // case ADD_NEW_ARM: return [...state, action.newArm]
        // case DELETE_ARM: return state.filter(arm => arm.id !== action.deletedArm)
        default: return state
    }
}

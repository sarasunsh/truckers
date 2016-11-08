import store from '../store'
import axios from 'axios';

// -=-=-=-= ACTIONS =-=-=-=-

const LOAD_ALL_TRUCKS = "LOAD_ALL_TRUCKS";
const ADD_NEW_TRUCK = "ADD_NEW_TRUCK";

// ACTION-CREATORS--------------------------------------------------------
export const loadAllTrucks = (fetchedTrucks) => {
  // had to throw this funkiness in here to correct the funkiness from the fetch.
  // more specifically, could not make Object.defineProperty work on the fetch
  // side. ran into issues with Sequelize object manipulation. here's the fix!
    let loadedTrucks = fetchedTrucks.map(truck => {
        Object.defineProperty(truck['truck'], 'avgPrice', {
          value: truck['avgPrice']
        })
        return truck['truck']   // loop over trucks, add the avgPrice obj, and return 
    })
    return {
        type: LOAD_ALL_TRUCKS,
        loadedTrucks
    }
}

export const receiveNewTruck = (newTruck) => {
    return {
        type: ADD_NEW_TRUCK,
        newTruck: newTruck
    }
}

// DISPATCHERS/THUNKS --------------------------------------------------------
export const fetchTrucksFromServer = () => {
    const thunk = (dispatch) => {
        axios.get('/api/trucks')
        .then(res => dispatch(loadAllTrucks(res.data)))
        .catch(err => console.log(err))
    }
    return thunk;
}

export const addNewTruck = (data) => {
    const thunk = (dispatch) => {
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
const trucksReducer = (state=[], action) => {
    switch (action.type){
        case LOAD_ALL_TRUCKS: return action.loadedTrucks
        // case ADD_NEW_ARM: return [...state, action.newArm]
        // case DELETE_ARM: return state.filter(arm => arm.id !== action.deletedArm)
        default: return state
    }
}

export default trucksReducer;

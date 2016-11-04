import store from '../store'

// -=-=-=-= ACTIONS =-=-=-=-

const REMOVE_FILTER = "REMOVE_FILTER";
const ADD_FILTER = "ADD_FILTER";
const FILTER_TRUCKS = "FILTER_TRUCKS";

// =-=-=-=-= ACTION-CREATORS =-=-=-=-=-

export const removeFilterAction = (str) => ({
    type: REMOVE_FILTER,
    filter: str
})

export const addFilterAction = (str) => ({
    type: ADD_FILTER,
    filter: str
})

export const showFilteredTrucksAction = () => ({
    type: FILTER_TRUCKS,
    trucks
})

// -=-=-=-=-= REDUCER =-=-=-=-=-=-

export default filterReducer = (state = store.getState(), action) => {
    switch(action.type){
        case REMOVE_FILTER: {
            let idx = state.filters.indexOf(action.filter);
            state.filters.splice(idx, 1);
            return state.filters;
        }
        case ADD_FILTER: {
            return state.filters.push(action.filter);
        }
        case FILTER_TRUCKS : {
            return state.trucks;
        }
        default: return state
    }
}

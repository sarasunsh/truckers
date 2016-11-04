import store from '../store'

const REMOVE_FILTER = "REMOVE_FILTER";
const ADD_FILTER = "ADD_FILTER";
const FILTER_TRUCKS = "FILTER_TRUCKS";

export const removeFilterAction = (str) => ({
    type: REMOVE_FILTER,
    filters:
})

export const addFilterAction = (str) => ({
    type: ADD_FILTER,
    filters
})

export const showFilteredTrucksAction = () => ({
    type: FILTER_TRUCKS,
    trucks
})

const reducer = (state = store.getState(), action) => {
    switch(action.type){
        case REMOVE_FILTER : {
            return Object.assign({}, state, { action.filters })
        }
        case ADD_FILTER : {}
        case FILTER_TRUCKS : {}
        default: return state
    }
}

import store from '../store'

// -=-=-=-= ACTIONS =-=-=-=-

const TOGGLE_OPEN = "TOGGLE_OPEN";
const TOGGLE_RATED = "TOGGLE_RATED";
const CHANGE_CUISINE = "CHANGE_CUISINE"
const CHANGE_PRICE = "CHANGE_PRICE"

// =-=-=-=-= ACTION-CREATORS =-=-=-=-=-

export const toggleFilterAction = (str) => {
    switch (str){
        case 'open_now': return { type: TOGGLE_OPEN }
        case 'highRated': return { type: TOGGLE_RATED }
        default: return;
    }
}

export const priceFilterAction = (price) => {
    return {
        type: CHANGE_PRICE,
        price
    }
}

export const cuisineFilterAction = (cuisine) => {
    return {
        type: CHANGE_CUISINE,
        cuisine
    }

}

// -=-=-=-=-= REDUCER =-=-=-=-=-=-

// Do we want to reset this once the user navigates away to an individual truck?
const initialFilter = {
    'open_now': false,
    'maxPrice': false,
    'highRated': false,
    'cuisine': false
}

// reduce our filter actions
const filterReducer = (state=initialFilter, action) => {
    switch (action.type){
        case TOGGLE_OPEN: return Object.assign({}, state, { 'open_now': !state['open_now']})
        case TOGGLE_RATED: return Object.assign({}, state, { 'highRated': !state['highRated']})
        case CHANGE_PRICE:
            if (action.price === state.maxPrice){
                return Object.assign({}, state, { 'maxPrice': false})
            } else {
                return Object.assign({}, state, { 'maxPrice': action.price})
            }
        case CHANGE_CUISINE:
            if (action.cuisine === state.cuisine){
                return Object.assign({}, state, { 'cuisine': false})
            } else {
                return Object.assign({}, state, { 'cuisine': action.cuisine})
            }
        default: return state
    }
}

export default filterReducer;

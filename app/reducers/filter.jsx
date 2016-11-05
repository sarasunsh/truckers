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
    type: FILTER_TRUCKS
})

// -=-=-=-=-= REDUCER =-=-=-=-=-=-

// check whether a truck matches our filters
const checkFilters(truck, filters) => {
  let truckProps = [];
  if (truck.isOpen) { truckProps.push('open')};  // filter is 'open'
  if (truck.rating >= 4) { truckProps.push('highRated') } // filter is 'highRated'
  // now we manually add props to avoid unintentional matches with non-filter prop values
  truckProps = [...truckProps, truck['cuisine'], truck['avgPrice']];
  return (truckProps.some(truckProp => {        // iterate over filterable props
    return filters.indexOf(truckProp) >= 0      // return true if prop hits a current filter
  }))
}

// reduce our filter actions
export default filterReducer = (state = store.getState(), action) => {
    switch(action.type){
        case REMOVE_FILTER: {
            let idx = state.filters.indexOf(action.filter);  // find index of filter to remove
            state.filters.splice(idx, 1);                    // splice it out
            return state.filters;                            // return the modified filters array
        }
        case ADD_FILTER: {
            return ([...state.filters, action.filter]);      // concat new filter
        }
        case FILTER_TRUCKS : {
            return state.trucks.map(truck => {               // iterate over filters
              if (checkFilters(truck, state.filters)) {      // check if truck matches a filter
                truck.display = 'block';                     // if yes, show
              } else {
                truck.display = 'none';                      // if not, hide
              }
            })
        }
        default: return state;
    }
}

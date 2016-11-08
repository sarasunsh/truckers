import axios from 'axios'

export const pullFilters = (filters) => {
    const filterArr = [];
    for (const key in filters){
        if (filters.hasOwnProperty(key)){
            if (filters[key]){
                filterArr.push(key)
            }
        }
    }
    return filterArr;
}

// This can easily be combined with the above function to reduce time complexity
export const checkFilters = (truck, filterArr, filters) => {
    for (var i = 0; i < filterArr.length; i++) {
        if (filterArr[i] === 'open_now' && !truck.isOpen){
            return false;
        } else if (filterArr[i] === 'maxPrice' && truck['avgPrice'] > filters['maxPrice']){
            return false;
        } else if (filterArr[i] === 'highRated' && truck['rating'] < 4){
            return false;
        } else if (filterArr[i] === 'cuisine' && truck['cuisine'] !== filters['cuisine']){
            return false;
        }
    }
    return true;
}

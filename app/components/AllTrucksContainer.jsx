'use strict';

import { connect } from 'react-redux';

import AllTrucks from './AllTrucks';
import { removeFilterAction, addFilterAction, showFilteredTrucksAction  } from '../reducers/filter';

// const mapStateToProps = function(state) {
//     return {
//         trucks: 'test'
//     }
// }

const mapDispatchToProps = dispatch => ({
    return {
        removeFilter: (str) => { dispatch(removeFilterAction(str)) },
        addFilter: (str) => { dispatch(addFilterAction(str)) },
        showFilteredTrucks: () => { dispatch(showFilteredTrucksAction()) }
    }
});

export default connect(
    null,
    mapDispatchToProps
)(AllTrucks);

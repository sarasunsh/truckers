import { connect } from 'react-redux';
import TruckSearch from './TruckSearch';

const mapStateToProps = state => {
    return {
        trucks: state.trucks,
        filters: state.filters
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTruckClick: (filter) => {
            const action = toggleFilterAction(filter)
            dispatch(action)
        }
    }
}

 /// mapDispatch -- add clickhandler to define current truck  on the store

export default connect(
    mapStateToProps
)(TruckSearch);

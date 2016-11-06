import { connect } from 'react-redux';
import FakeSidebar from './FakeSidebar';
import { toggleFilterAction, priceFilterAction, cuisineFilterAction  } from '../../reducers/filter';

const mapStateToProps = state => {
    return {
        filters: state.filters
    }
}

const mapDispatchToProps = function(dispatch){
    return {
        toggleFilter: function(filter){
            const action = toggleFilterAction(filter)
            dispatch(action)
        },
        priceFilter: function(price){
            const action = priceFilterAction(price)
            dispatch(action)
        },
        cuisineFilter: function(cuisine){
            const action = cuisineFilterAction(cuisine)
            dispatch(action)
        }
    }
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(FakeSidebar);


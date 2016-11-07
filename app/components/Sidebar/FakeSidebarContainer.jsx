import { connect } from 'react-redux';
import FakeSidebar from './FakeSidebar';
import { toggleFilterAction, priceFilterAction, cuisineFilterAction  } from '../../reducers/filter';

const mapStateToProps = state => {
    return {
        filters: state.filters
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleFilter: (filter) => {
            const toggleAction = toggleFilterAction(filter)
            dispatch(toggleAction)
        },
        priceFilter: (price) => {
            const priceAction = priceFilterAction(price)
            dispatch(priceAction)
        },
        cuisineFilter: (cuisine) => {
            const cuisineAction = cuisineFilterAction(cuisine)
            dispatch(cuisineAction)
        }
    }
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(FakeSidebar);

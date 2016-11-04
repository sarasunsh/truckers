'use strict';

import { connect } from 'react-redux';
import Sidebar from './Sidebar';


    // const { onHighRatedClick, onOpenClick, onBudgetClick, onCuisineClick } = props;

/// THE ABOVE FUNCTIONS WILL NEED TO BE ADDED

const mapDispatchToProps = dispatch => ({
  onHighRatedClick: loc => dispatch(switchLocation(loc))
});

export default connect(
    mapStateToProps
)(Sidebar);

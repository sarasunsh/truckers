'use strict';

import { connect } from 'react-redux';
import Sidebar from '../components/Sidebar';

const mapStateToProps = ({ location }) => ({
  location
});

// const mapDispatchToProps = dispatch => ({
//   go: loc => dispatch(switchLocation(loc))
// });

export default connect(
    mapStateToProps
)(Sidebar);

'use strict';

import { connect } from 'react-redux';
import ProfilePage from './ProfilePage';

const mapStateToProps = state => ({
    user: state.currentUser
});


export default connect(mapStateToProps, null)(ProfilePage);

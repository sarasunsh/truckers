'use strict';

import { connect } from 'react-redux';
import App from './App';

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

export default connect(
    mapStateToProps
)(App);

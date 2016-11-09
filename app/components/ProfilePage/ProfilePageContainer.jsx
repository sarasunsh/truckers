'use strict';

import { connect } from 'react-redux';
import ProfilePage from './ProfilePage';

const mapStateToProps = state => ({
	user: {
			name: state.auth.name,
			email: state.auth.email,
			id: state.auth.id,
			isVendor: state.auth.isVendor
	}
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, null)(ProfilePage);


// created_at
// :
// "2016-11-08T19:05:08.017Z"
// email
// :
// "zfranklyn@gmail.com"
// id
// :
// 101
// isVendor
// :
// false
// name
// :
// "Franklyn Zhu"
// password_digest
// :
// "$2a$10$rE.GlqbPx8IWd9R1EIVU4OrzNyQZKfP/y8xllphh8oJsfLfy5cJsi"
// updated_at
// :
// "2016-11-08T19:05:08.017Z"

const mapStateToProps = state => ({
    user: state.currentUser
});


export default connect(mapStateToProps, null)(ProfilePage);

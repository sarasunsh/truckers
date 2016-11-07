'use strict';

import { connect } from 'react-redux';
import Menu from './Menu';
import {addItem} from '../reducers/shoppingCartReducer';

const mapDispatchToProps = dispatch => ({
	addItem: function(item){
		dispatch(addItem(item));
	},
});

export default connect(null, mapDispatchToProps)(Menu);

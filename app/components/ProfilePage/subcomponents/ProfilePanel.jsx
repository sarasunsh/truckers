'use strict';

import React, {Component} from 'react';
import { Col, Button, Panel, Popover, OverlayTrigger, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

export default class ProfilePanel extends Component {

	constructor(props){
		super(props);
	}

	changePassword(){

	}

    render(){
    	const {user} = this.props;

    	const DeleteAccountPopover = (
		  <Popover id="popover-trigger-click-root-close" title="Are you sure?">
		    <Button bsStyle="danger">Delete Account</Button>
		  </Popover>
		);

    	const width = {
    		width:'500px'
    	}
    	const ChangePasswordPopover = (
		  <Popover id="popover-trigger-click-root-close" title="Are you sure?" style={width}>
		    <FormGroup>
				<Col sm={12}>
					<FormControl id="old_password" type="password" placeholder="Old Password" />
				</Col>		    
				<Col sm={12}>
					<FormControl id="new_password" type="password" placeholder="New Password" />
				</Col>
				<Button bsStyle="success" onClick={()=>this.changePassword()}>Confirm</Button>
		    </FormGroup>
		  </Popover>
		);

    	

		return(
	    	<Panel id="profile_panel" header="Profile">
	    		<h4>{user.name}</h4>
	    		<p>{user.email}</p>

		        <OverlayTrigger container={this} rootClose trigger="click" placement="right" overlay={DeleteAccountPopover}>
		          <a>Delete Account</a>
		        </OverlayTrigger>
	    		<br/>
		        <OverlayTrigger container={this} rootClose trigger="click" placement="right" overlay={ChangePasswordPopover}>
		          <a>Change Password</a>
		        </OverlayTrigger>
			</Panel>
	    )
	}

}


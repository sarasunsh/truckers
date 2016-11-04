import React, { Component } from 'react';
import { Well, Button, Glyphicon } from 'react-bootstrap';
import axios from 'axios';
import TruckDescription from '../TruckDescription';
import ShoppingCartContainer from '../ShoppingCart/ShoppingCartContainer';
import Menu from '../Menu';


export default class SingleTruck extends Component {

    render() {
        return (
            <div className="row">
                <div className="col-xs-9">
                    <TruckDescription/>
                    <Menu />
                 </div>
                <div className="col-xs-3">
                    <ShoppingCartContainer />
                </div>
            </div>
        )
    }
}


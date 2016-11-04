import React, { Component } from 'react';
import { Well, Button, Glyphicon } from 'react-bootstrap';
import axios from 'axios';
import TruckDescription from '../TruckDescription';
import FakeShoppingCart from '../FakeShoppingCart';
import Menu from '../Menu';


export default class SingleTruck extends Component {

    render() {
        return (
            <div className="row">
                <div className="col-xs-10">
                    <TruckDescription/>
                    <Menu />
                 </div>
                <div className="col-xs-2">
                    <FakeShoppingCart />
                </div>
            </div>
        )
    }
}


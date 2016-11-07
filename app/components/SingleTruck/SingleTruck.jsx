import React, { Component } from 'react';
import TruckDescription from '../TruckDescription';
import ShoppingCartContainer from '../ShoppingCart/ShoppingCartContainer';
import Menu from '../Menu';


export default class SingleTruck extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-xs-10">
                    <TruckDescription truck={this.props.truck}/>
                    <Menu menu={this.props.truck.menu}/>
                 </div>
                <div className="col-xs-3">
                    <ShoppingCartContainer />
                </div>
            </div>
        )
    }
}


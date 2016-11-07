import React, { Component } from 'react';
import TruckDescription from '../TruckDescription';
import ShoppingCartContainer from '../ShoppingCart/ShoppingCartContainer';
import Menu from '../Menu';


export default class SingleTruck extends Component {

    render() {
        return (
            <div className="row">
<<<<<<< HEAD
                <div className="col-xs-9">
                    <TruckDescription/>
                    <Menu />
=======
                <div className="col-xs-10">
                    <TruckDescription truck={this.props.truck}/>
                    <Menu menu={this.props.truck.menu}/>
>>>>>>> 3a2e1a36ad4ce8510799dcfb286b83da270036a8
                 </div>
                <div className="col-xs-3">
                    <ShoppingCartContainer />
                </div>
            </div>
        )
    }
}


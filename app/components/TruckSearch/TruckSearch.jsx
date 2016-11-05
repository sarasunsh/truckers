import React, { Component } from 'react';
import { Well, Button, Glyphicon } from 'react-bootstrap';
import axios from 'axios';
import TruckItem from '../TruckItem';

/* Presentation Component showing all Trucks or filtered Trucks

  trucks = [ {truck1}, {truck2}, ... ]
  truck = {
    id: 1,
    name: 'Taco Truck',
    cuisine: 'Mexican',
    image: 'http://imgur.com/taco.png',
    description: 'We love tacos!'
    display: 'block' || 'none'
  }

  NOTE that the 'display' property on truck is a construct of our
  action-creators to allow our reducers to filter only those trucks
  we wish to present in this component
*/
export default class TruckSearch extends Component {
    constructor (props) {
        super(props);
        const { trucks } = props;  // passed via mapStateToProps from Provider Store
    }

    // render blocks of trucks passed from the store
    render() {
        return (
            <div className="row">
                {
                    trucks.map( truck => (
                        <div className="col-xs-4" key={truck.id}>

                            <TruckItem
                                id={truck.id}
                                name={truck.name}
                                cuisine={truck.cuisine}
                                image={truck.image}
                                description={truck.description}
                                display={truck.display}
                            />
                        </div>
                    ))
                }
            </div>
        )
    }
}

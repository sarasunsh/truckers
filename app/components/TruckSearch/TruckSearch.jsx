import React, { Component } from 'react';
import TruckItem from '../TruckItem';
import { pullFilters, checkFilters } from '../../utils';

// Presentation Component showing all Trucks or filtered Trucks
export default class TruckSearch extends Component {
    render() {
        // Utility functions are used to filter out trucks that do not fit the user's selected filters
        const { trucks, filters } = this.props;
        const filterArr = pullFilters(filters);
        const filterTrucks = trucks.filter(truck => checkFilters(truck, filterArr, filters));

        return (
            <div className="row">
                {
                    filterTrucks.map( truck => (
                        <div className="col-xs-4" key={truck.id}>
                            <TruckItem
                                id={truck.id}
                                name={truck.name}
                                cuisine={truck.cuisine}
                                image={truck.image}
                                description={truck.description}
                            />
                        </div>
                    ))
                }
            </div>
        )
    }
}

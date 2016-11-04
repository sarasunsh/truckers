import React, { Component } from 'react';
import { Well, Button, Glyphicon } from 'react-bootstrap';
import axios from 'axios';
import TruckItem from '../TruckItem';


export default class TruckDescription extends Component {
    constructor (props) {
        super(props);
        this.state = {trucks: []};
    }

    componentDidMount () {
        axios.get('/api/trucks')
        .then(res => this.onLoad(res.data))
        .catch(err => console.log(err))
    }

    onLoad (trucks) {
        this.setState({ trucks });
    }

    render() {
        console.log('state', this.state.trucks)
        return (
            <div className="row">
                {
                    this.state.trucks.map( truck => (
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



import React, { Component } from 'react';
import { Well, Grid, Thumbnail, Button, Row, Col, Image } from 'react-bootstrap';
// import StarRating from 'react-bootstrap-star-rating';
import {Link} from 'react-router';

// TruckItem Component displays each individual truck on the main truck
// presentational component (TruckSearch). The presentational component passes
// the truck's properties on props, including whether it is displayed or not
export default class TruckItem extends Component {

    render() {

        const h4CuisineStyle = {
            color: '#FFA500'
        };

        return (
            
                <div>
                    <Link to={`/trucks/${this.props.id}`}>  
                        <img src={this.props.image} className='fullWidthImage'/>
                    </Link>

                    <div className="truckItemContent">
                        <h3>{this.props.name}</h3>
                        <h4 style={h4CuisineStyle}>{this.props.cuisine}</h4>
                        <span>${this.props.avgPrice}</span>
                        <p>{this.props.description}</p>
                    </div>
                </div>
            
        )
    }
}


import React, { Component } from 'react';
import { Well, Grid, Thumbnail, Button, Row, Col } from 'react-bootstrap';
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
        <Grid>
          <Row>
          <Col xs={6} md={4}>
            <Link to={`/trucks/${this.props.id}`}>
              <Thumbnail src={this.props.image} alt="242x200">
                <h3>{this.props.name}</h3>
                <h4 style={h4CuisineStyle}>{this.props.cuisine}</h4>
                <p>{this.props.description}</p>
              </Thumbnail>
            </Link>
          </Col>
          </Row>
        </Grid>
    )
  }
}

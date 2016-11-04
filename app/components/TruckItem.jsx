
import React, { Component } from 'react';
import { Well, Grid, Thumbnail, Button, Row, Col } from 'react-bootstrap';
// import StarRating from 'react-bootstrap-star-rating';

export default class TruckItem extends Component {



  render() {

      const h4CuisineStyle = {
          color: '#FFA500'
      };

    return (
        <Grid>
          <Row>
          <Col xs={6} md={4}>
            <Thumbnail src={this.props.image} alt="242x200">
              <h3>{this.props.name}</h3>
              <h4 style={h4CuisineStyle}>{this.props.cuisine}</h4>
              <p>{this.props.description}</p>
            </Thumbnail>
          </Col>
          </Row>
        </Grid>
    )
  }
}

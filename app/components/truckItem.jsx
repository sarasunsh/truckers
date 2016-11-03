import React, { Component } from 'react';
import { Well, Grid, Thumbnail, Button, Row, Col } from 'react-bootstrap';
import StarRating from 'react-bootstrap-star-rating';

export default class OurNav extends Component {
  constructor() {
    super()
    this.state = {};
  }


  render() {

      const h4CuisineStyle = {
          color: '#FFA500'
      };

    return (
        <Grid>
          <Row>
          <Col xs={6} md={4}>
            <Thumbnail src="http://i.imgur.com/uscEp4s.jpg" alt="242x200">
              <h3>Mediterranean Food Truck</h3>
              <StarRating
                  defaultValue={5}
                  min={0}
                  max={10}
                  step={0.5} />
              <h4 style={h4CuisineStyle}>Gyros, (Cuisine Description)</h4>
              <p>This is the best food truck for gyros, grilled meats etc. (description)</p>
            </Thumbnail>
          </Col>
          </Row>
        </Grid>
    )
  }
}

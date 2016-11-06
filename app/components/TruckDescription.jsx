import React, { Component } from 'react';
import { Well, Button, Glyphicon } from 'react-bootstrap';

// ----------------------------------------REDUX
// This component should receive the following props from its container:
// - truck details from model: name, description, image, website, cuisine, location
// - computed metrics: average review rating, total review number, average order price, distance from user (if logged in)
// - onFavoriteClick: event handler that will add truck to list of user's favorite trucks

// ----------------------------------------Styling
// The following style elements need to be fixed:
// - thumbnail image should resize itself appropriately
// - remove border from favorite icon
// - replace 'star rating' with actual stars

export default class TruckDescription extends Component {

  render() {
    const { truck } = this.props
    return (
      <Well className="clearfix">
        <row>

          <div className="col-xs-4">

            <img className="img-thumbnail" src={truck.image} />

          </div>

          <div className="col-xs-8">

            <row>
              <div className="col-xs-10">
                <h3>{truck.name}</h3>
              </div>
              <div className="col-xs-2">
                <Button type="submit"><Glyphicon glyph="star-empty" /></Button>
              </div>
            </row>

            <row>
              <div className="col-xs-12">
                <h6>star rating | 14 reviews | $7.35 | 0.18 mi </h6>
              </div>
            </row>

            <row>
              <div className="col-xs-12">
                <h5>{truck.description}</h5>
              </div>
            </row>
            <row >
              <div className="col-xs-10">
                <h6> {truck.location} </h6>
              </div>
              <div className="col-xs-2">
                <Button type="submit"><Glyphicon glyph="envelope" /></Button>
              </div>
            </row>

          </div>
        </row>
      </Well>
    )
  }
}

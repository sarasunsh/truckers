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
// =-0n b

export default class TruckDescription extends Component {

  render() {

    return (
      <Well className="clearfix">
        <row>

          <div className="col-xs-4">

            <img className="img-thumbnail" src="http://static.wixstatic.com/media/6623dd_e46933fec7154f9ab2987d4f547404ca~mv2.jpg_256" />

          </div>

          <div className="col-xs-8">

            <row>
              <div className="col-xs-10">
                <h3>The Pizza Truck</h3>
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
                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et tincidunt tellus. Etiam nunc diam, sagittis in venenatis ac, mattis sed velit. Vestibulum bibendum velit vel ullamcorper venenatis....</h5>
              </div>
            </row>
            <row >
              <div className="col-xs-10">
                <h6>
                  10 Hanover Square
                  New York, New York 10015
                </h6>
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

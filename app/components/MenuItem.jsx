import React, { Component } from 'react';
import { Panel, ListGroup, ListGroupItem, Well, Button, Glyphicon } from 'react-bootstrap';


export default class MenuItem extends Component {

  render() {

    const cssBrandOrange = {
        color: '#FFA500'
    };

    const {item} = this.props;

    return (
        <div>
            <Well className="clearfix">
              <row>
                <row>
                    <div className="col-xs-4">
                        <h4 style={cssBrandOrange}>{item.name}</h4>
                        <h5>{item.description}</h5>
                    </div>
                </row>
                <div className="col-xs-8">
                  <row>
                    <div className="col-xs-10">
                      <h5>{item.price}</h5>
                    </div>
                  </row>
                  <Button type="submit"><Glyphicon glyph="plus" /></Button>
                </div>
              </row>
            </Well>
        </div>
    )
  }
}

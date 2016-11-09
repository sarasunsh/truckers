import React, { Component } from 'react'
import { Well, Button, Radio, Col, ControlLabel, FormControl, FormGroup } from 'react-bootstrap'

export default class ReviewForm extends Component {
  render() {
      return (
          <div>
            <Well>
              <h3> Leave a review for this truck! </h3>
              <form onSubmit={this.props.handleSubmit}>
                  <FormGroup>
                    <Radio inline>
                      1
                    </Radio>
                    {' '}
                    <Radio inline>
                      2
                    </Radio>
                    {' '}
                    <Radio inline>
                      3
                    </Radio>
                    {' '}
                    <Radio inline>
                      4
                    </Radio>
                    {' '}
                    <Radio inline>
                      5
                    </Radio>
                  </FormGroup>
                  <FormGroup controlId="formControlsTextarea">
                    <FormControl
                      name='content'
                      componentClass="textarea"
                      placeholder="What'd you think?"
                      onChange={this.props.handleContentChange}
                      value={this.props.contentText}
                      />
                  </FormGroup>
                  <Button type="submit">Leave a review!</Button>
              </form>
            </Well>
          </div>
     )
  }
}

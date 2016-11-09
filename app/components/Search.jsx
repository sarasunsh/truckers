import React, { Component } from 'react';
import { FormGroup, FormControl, Button, Glyphicon } from 'react-bootstrap';

export default (props) => {
    console.log('search props', props)
    const { handleChange, handleSubmit } = props;

    return (
        <div>
            <Button type="submit">
              <Glyphicon glyph="search" />
            </Button>
            <FormGroup>
              <FormControl
                name='sear h'
                type="text"
                placeholder="Hungry?"
                value=''
                onChange={handleChange}
                onSubmit={handleSubmit}
              />
            </FormGroup>
        </div>
    )
}

'use strict';

import React from 'react';
import { connect } from'react-redux';
import ReviewForm from './ReviewForm';
import { addNewReview } from '../../reducers/singleTruck';

// Here the HOC takes the 'dumb' playlist component and gives it a local state to track the review content and then event handlers for when the review is changed and when it is submitted.
function ReviewDecorator(FormComponent) {
    return class StatefulReviewForm extends React.Component {
        constructor(props){
            super(props);
            this.state = {
                content: ''
            }
            this.handleChange = this.handleChange.bind(this);
            this.handleSubmitWithState = this.handleSubmitWithState.bind(this);
        }

        handleChange(evt){
            this.setState({
                content: evt.target.value
            });
        }

        handleSubmitWithState(evt){
            evt.preventDefault();
            const newReview = {
                rating: 5,
                content:this.state.content
            }
            this.props.createReview(newReview, this.props.truck.id);
            this.setState({
                content: ''
            })
        }

        render(){
            return (
                <FormComponent
                    handleContentChange={this.handleChange}
                    handleSubmit={this.handleSubmitWithState}
                    contentText={this.state.content}
                />
            )
        }
    }
}

const mapStateToProps = function(state){
    return {
        truck: state.currentTruck
    }
}

const mapDispatchToProps = function (dispatch) {
  return {
    createReview: function(reviewObj, truckID) {
        const action = addNewReview(reviewObj, truckID);
        dispatch(action);
    }
  }
};

const StatefulReviewForm = ReviewDecorator(ReviewForm)
const ReviewFormContainer = connect(null, mapDispatchToProps)(StatefulReviewForm);
export default ReviewFormContainer;

'use strict';

import React from 'react';
import { connect } from'react-redux';
import Search from './Search';
import { searchFilterAction } from '../reducers/filter';

// Here the HOC takes the 'dumb' playlist component and gives it a local state to track the Nav content and then event handlers for when the Nav is changed and when it is submitted.
function SearchFormDecorator(SearchFormComponent) {
    return class StatefulForm extends React.Component {
        constructor(props){
            super(props);
            // this.state = {
            //     search: ''
            // }
            this.handleChange = this.handleChange.bind(this);
            this.handleSubmitWithState = this.handleSubmitWithState.bind(this);
        }

        handleChange(evt){
            console.log(evt.target)
            // this.setState({
            //     search: evt.target.value
            // });
        }

        handleSubmitWithState(evt){
            evt.preventDefault();
            this.props.submitSearch(this.state.search)
            // this.setState({
            //     search: ''
            // })
        }

        render(){
            return (
                <SearchFormComponent
                    handleContentChange={this.handleChange}
                    handleSubmit={this.handleSubmitWithState}
                    // contentText={this.state.content}
                />
            )
        }
    }
}

// const mapStateToProps = function(state){
//     return {
//         serach: state.currentTruck
//     }
// }

const mapDispatchToProps = function (dispatch) {
  return {
    submitSearch: function(searchTerm) {
        const action = searchFilterAction(searchTerm);
        dispatch(action);
    }
  }
};

const StatefulSearch = SearchFormDecorator(Search)
const SearchContainer = connect(null, mapDispatchToProps)(StatefulSearch);
export default SearchContainer;

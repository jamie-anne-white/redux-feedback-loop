import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Review extends Component {

    submitFeedback = () => {
        console.log('submit');
        axios.post('/feedback', this.props.reduxState.feedbackReducer)
            .then(response => {
                //go to success page
                this.props.history.push('/success');
            }).catch(error => {
                console.log('error in POST', error);
            })
    }

    editFeedback = () => {
        this.props.history.push('edit');
      }

    render() {
        return (
            <div>

                <h2>REVIEW</h2>

                <p>Feelings: {this.props.reduxState.feedbackReducer.feeling}</p>
                <p>Understanding: {this.props.reduxState.feedbackReducer.understanding}</p>
                <p>Support: {this.props.reduxState.feedbackReducer.support}</p>
                <p>Comments: {this.props.reduxState.feedbackReducer.comments}</p>

                <button onClick={this.submitFeedback}>Submit</button>
                {/* edit button */}
                <button onClick={this.editFeedback}>Edit</button>


            </div>
        );
    }
}

const mapStateToProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(mapStateToProps)(Review); 
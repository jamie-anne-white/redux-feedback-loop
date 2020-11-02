import React, { Component } from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import './Success.css'


class Success extends Component {

    submitFeelings = () => {
        this.props.history.push('/')
    }


  render() {
    return (
      <div className="container">
        <Paper id='paper'>
        <h3>Thanks! Your feedback has been submitted.</h3>
        <button onClick={this.submitFeelings}>Submit New Feedback</button>
      </Paper>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => {
  return {
      reduxState
  }
}

export default connect(mapStateToProps)(Success); 
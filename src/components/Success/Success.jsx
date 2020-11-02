import React, { Component } from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button'

import './Success.css'


class Success extends Component {

    submitFeelings = () => {
        this.props.history.push('/')
    }


  render() {
    return (
      <div className="container">
        <Paper id='paper'>
        <h3>Awesome, thank you for your feedback!</h3>
        <Button variant="contained" type='submit' onClick={this.submitFeelings}>Submit New Feedback</Button>
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
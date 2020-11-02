import React, { Component } from 'react';
import { connect } from 'react-redux';


class Success extends Component {

    submitFeelings = () => {
        this.props.history.push('/')
    }


  render() {
    return (
      <div>
        <h3>Thanks! Your feedback has been submitted.</h3>
        <button onClick={this.submitFeelings}>Submit New Feedback</button>
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
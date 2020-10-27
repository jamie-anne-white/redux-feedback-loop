import React, { Component } from 'react';

class Feeling extends Component {

    submitFeelings = () => {
        this.props.history.push('/2')
    }
  render() {
    return (
      <div>

          <p>FEELING</p>
          <button onClick={this.submitFeelings}>Next</button>


      </div>
    );
  }
}

export default Feeling; 
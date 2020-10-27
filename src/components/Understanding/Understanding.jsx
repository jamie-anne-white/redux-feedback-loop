
import React, { Component } from 'react';


class Understanding extends Component {

    submitUnderstanding = () => {
        this.props.history.push('/3')
    }
    
  render() {

    return (
      <div>

          <p>UNDERSTANDING</p>
          <button onClick={this.submitUnderstanding}>Next</button>


      </div>
    );
  }
}

export default Understanding; 
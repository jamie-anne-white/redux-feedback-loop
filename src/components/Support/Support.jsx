import React, { Component } from 'react';

class Support extends Component {

    submitSupport = () => {
        this.props.history.push('/4')
    }
  render() {
    return (
      <div>

          <p>SUPPORT</p>
          <button onClick={this.submitSupport}>Next</button>



      </div>
    );
  }
}

export default Support; 
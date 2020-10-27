import React, { Component } from 'react';

class Support extends Component {

  submitSupport = (event) => {
    event.preventDefault();
    this.props.history.push('/4')
  }
  render() {
    return (
      <div>

        <h1>SUPPORT</h1>
        <h2>How well do you feel you're being supported today?</h2>
        <form onSubmit={this.submitSupport}>
          <input type='number' placeholder='Support' />

          <button type="submit">Next</button>
        </form>



      </div>
    );
  }
}

export default Support; 
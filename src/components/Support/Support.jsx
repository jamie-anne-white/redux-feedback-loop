import React, { Component } from 'react';
import { connect } from 'react-redux';

class Support extends Component {

  state = {
    support: 0
  }


  submitSupport = (event) => {
    event.preventDefault();
    this.props.dispatch({ type: 'ADD_SUPPORT', payload: this.state.support })
    this.props.history.push('/4')
  }
  render() {
    return (
      <div>

        <h1>SUPPORT</h1>
        <h2>How well do you feel you're being supported today?</h2>
        <form onSubmit={this.submitSupport}>
          <input type='number' placeholder='Support'
            onChange={(event) => this.setState({ support: event.target.value })} />

          <button type="submit">Next</button>
        </form>



      </div>
    );
  }
}

const mapStateToProps = (reduxState) => {
  return {
      reduxState
  }
}

export default connect(mapStateToProps)(Support); 
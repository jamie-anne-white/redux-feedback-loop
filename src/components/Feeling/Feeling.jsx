import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';


class Feeling extends Component {

  state = {
    feelings: 0
  }


  submitFeelings = (event) => {
    event.preventDefault();
    this.props.dispatch({ type: 'ADD_FEELINGS', payload: this.state.feelings })
    this.props.history.push('/2')
  }

  render() {
    return (
      <div>

        <h1>FEELING</h1>
        <h2>How are you feeling about today?</h2>
        <form onSubmit={this.submitFeelings}>
        <TextField variant="outlined" required type='number' placeholder='Feeling' min="1" max="10"
            onChange={(event) => this.setState({ feelings: event.target.value })} />
          <Button variant="contained" type="submit">Next</Button>
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
export default connect(mapStateToProps)(Feeling); 

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import './Understanding.css'



class Understanding extends Component {

  state = {
    understanding: 0
  }


  submitUnderstanding = (event) => {
    event.preventDefault();
    this.props.dispatch({ type: 'ADD_UNDERSTANDING', payload: this.state.understanding })
    this.props.history.push('/3')
  }

  render() {

    return (
      <div className="container">
        <Paper id='paper'>
          <h1>Understanding</h1>
          <h2>How well are you understanding the content?</h2>
          <form onSubmit={this.submitUnderstanding}>
            <TextField variant="outlined" required type='number' placeholder='Understanding' min="1" max="10"
              onChange={(event) => this.setState({ understanding: event.target.value })} />
            <div className='submitBtn' >
              <Button variant="contained" type='submit'>Next</Button>
            </div>
          </form>
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
export default connect(mapStateToProps)(Understanding); 
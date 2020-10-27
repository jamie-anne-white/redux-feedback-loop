import React, { Component } from 'react';


class Comments extends Component {
  //submitting comments
  submitComments = (event) => {
    event.preventDefault();
    this.props.history.push('/5')
  }
  render() {
    return (
      <div>

        <h1>COMMENTS</h1>
        <h2>Any comments or thoughts you would like to share?</h2>
        <form onSubmit={this.submitComments}>
          <input type='text' placeholder='Comments' />
          <button type="submit">Next</button>
        </form>

      </div>
    );
  }
}

export default Comments; 
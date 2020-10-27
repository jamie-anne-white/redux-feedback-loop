import React, { Component } from 'react';

class Review extends Component {

    submitFeedback = () => {
        console.log('submit');
    }

    render() {
        return (
            <div>

                <h1>REVIEW</h1>
                <button onClick={this.submitFeedback}>Submit</button>

            </div>
        );
    }
}

export default Review; 
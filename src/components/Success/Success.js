import React, { Component } from 'react';
import './Success.css';

// Redux stuff
import { connect } from 'react-redux';

class Success extends Component {

    leaveNewFeedback = () => {
        // TODO send user back to first page.
        this.props.history.push('/');

    }

    render() {
        return (
            <div>
                <h1>Feedback submitted successfully!</h1>
                <button onClick={this.leaveNewFeedback}>Leave New Feedback</button>
            </div>
        )
    }
}

const putStateOnProps = (reduxState) => ({reduxState});
export default connect(putStateOnProps)(Success);
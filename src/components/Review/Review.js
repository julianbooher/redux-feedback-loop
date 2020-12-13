import React, { Component } from 'react';
import './Review.css';

// Redux stuff
import { connect } from 'react-redux';

class _template extends Component {

    render() {
        return (
            <div>
                <h1>Review Your Feedback</h1>
                <p>Feeling: {this.props.reduxState.feeling}</p>
                <p>Understanding: {this.props.reduxState.understanding}</p>
                <p>Support: {this.props.reduxState.support}</p>
                {/* TODO - conditional rendering if comment/not */}
                <p>Comment: {this.props.reduxState.comment}</p>
                <button>Submit</button>
            </div>
        )
    }
}

const putStateOnProps = (reduxState) => ({reduxState});
export default connect(putStateOnProps)(_template);
import React, { Component } from 'react';
import axios from 'axios';
import './Review.css';

// Redux stuff
import { connect } from 'react-redux';

class Review extends Component {

    submitFeedback = () => {
        console.log(this.props.reduxState);
        axios.post('/feedback', this.props.reduxState)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log('Error in client POST', error)
        })
    }

    // function to move to the previous page, this will need to change between components unless I make it dynamic (maybe TODO)
    previousPage = () => {
        this.props.history.push('/comment')
    }
    
    render() {
        return (
            <div>
                {JSON.stringify(this.props.reduxState)}
                <h1>Review Your Feedback</h1>
                <p>Feeling: {this.props.reduxState.feeling}</p>
                <p>Understanding: {this.props.reduxState.understanding}</p>
                <p>Support: {this.props.reduxState.support}</p>
                {/* TODO - conditional rendering if comment/not */}
                <p>Comment: {this.props.reduxState.comment}</p>
                <button onClick={this.previousPage}>Previous</button>
                <button onClick={this.submitFeedback}>Submit</button>
            </div>
        )
    }
}

const putStateOnProps = (reduxState) => ({reduxState});
export default connect(putStateOnProps)(Review);
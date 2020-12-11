import React, { Component } from 'react';
import './Comment.css';

// Redux stuff
import { connect } from 'react-redux';

class Comment extends Component {

    render() {
        return (
            <div>
                <h1>Hello from Comment</h1>
            </div>
        )
    }
}

const putStateOnProps = (reduxState) => ({reduxState});
export default connect(putStateOnProps)(Comment);
import React, { Component } from 'react';
import './Support.css';

// Redux stuff
import { connect } from 'react-redux';

class Support extends Component {

    render() {
        return (
            <div>
                <h1>Hello from Support</h1>
            </div>
        )
    }
}

const putStateOnProps = (reduxState) => ({reduxState});
export default connect(putStateOnProps)(Support);
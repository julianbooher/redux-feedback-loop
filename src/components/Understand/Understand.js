import React, { Component } from 'react';
import './Understand.css';

// Redux stuff
import { connect } from 'react-redux';

class Understand extends Component {

    render() {
        return (
            <div>
                <h1>Hello from Understand</h1>
            </div>
        )
    }
}

const putStateOnProps = (reduxState) => ({reduxState});
export default connect(putStateOnProps)(Understand);
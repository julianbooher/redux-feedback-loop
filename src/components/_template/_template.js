import React, { Component } from 'react';
import './_template.css';

// Redux stuff
import { connect } from 'react-redux';

class _template extends Component {

    render() {
        return (
            <div>
                <h1>Hello from _template</h1>
            </div>
        )
    }
}

const putStateOnProps = (reduxState) => ({reduxState});
export default connect(putStateOnProps)(_template);
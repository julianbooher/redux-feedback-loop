import React, { Component } from 'react';
import './Feel.css';

// Redux stuff
import { connect } from 'react-redux';

class Feel extends Component {

    state = {
        feeling: 1
    }

    handleSubmit = () => {
        console.log('in submit');
        
    }

    handleChangeFor = (event, input) => {
        this.setState({
            newCustomer: {
                ...this.state.newCustomer,
                [input]: event.target.value
            },
        });
    }

    render() {
        return (
            <div>
                <h1>How are you feeling today?</h1>
                <form onSubmit={this.handleSubmit}>
                    <input  required min="1" max="10" type="number" placeholder="1-10" value={this.state.value} onChange={this.handleChangeFor} />
                    <button type="submit">Next</button>
                </form>
            </div>
        )
    }
}

const putStateOnProps = (reduxState) => ({reduxState});
export default connect(putStateOnProps)(Feel);
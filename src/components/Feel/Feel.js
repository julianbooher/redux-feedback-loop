import React, { Component } from 'react';
import './Feel.css';

// Redux stuff
import { connect } from 'react-redux';

class Feel extends Component {

    state = {
        feeling: 1
    }

    handleSubmit = () => {
        let stateKey = Object.keys(this.state)[0]
        console.log('in submit');
        console.log(this.state[stateKey])
        // TO DO input validation with sweetalert? if/else
        this.props.dispatch({type: 'UPDATE_VALUE', payload: {
            key: stateKey,
            value: this.state[stateKey]
        }})
    }

    componentDidMount(){
        this.setState({
            feeling: this.props.reduxState.feeling
        })
    }

    handleChangeFor = (event, input) => {
        this.setState({
                [input]: Number(event.target.value)
            })
    }

    render() {
        return (
            <div>
                {JSON.stringify(this.state)}
                <br>
                </br>
                {JSON.stringify(this.props.reduxState)}
                <h1>How are you feeling today?</h1>
                <form onSubmit={this.handleSubmit}>
                    <input  
                        required min="1" 
                        max="10" 
                        type="number" 
                        placeholder="1-10" 
                        value={this.state.feeling} 
                        onChange={(event) => this.handleChangeFor(event, 'feeling')} />
                    <button type="submit">Next</button>
                </form>
            </div>
        )
    }
}

const putStateOnProps = (reduxState) => ({reduxState});
export default connect(putStateOnProps)(Feel);
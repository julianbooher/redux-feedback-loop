import React, { Component } from 'react';
import './Understand.css';

// Redux stuff
import { connect } from 'react-redux';

// this one will become the key of the key:value inside state so that this template is dynamic across components.
const stateKey = 'understanding'

class Understand extends Component {

    state = {
        [stateKey]: 1
    }

    componentDidMount(){
        // set the state to the value stored in redux, the key is based on the const stateKey above the class.
        // this is dynamic so that if you come back to this page from a different page
        // it will become the value that the user set it to previously.
        this.setState({
            [stateKey]: this.props.reduxState[stateKey]
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // TO DO input validation with sweetalert? if/else
        // send an object as the payload to the reducer
        // this is dynamic so it can be used across components
        this.props.dispatch({type: 'UPDATE_VALUE', payload: {
            [stateKey]: this.state[stateKey]
        }})
        this.nextPage();
    }

    // function to move to the next page, this will need to change between components unless I make it dynamic (maybe TODO)
    nextPage = () => {
        this.props.history.push('/support')
    }

    // function to move to the previous page, this will need to change between components unless I make it dynamic (maybe TODO)
    previousPage = () => {
        this.props.history.push('/')
    }


    handleChangeFor = (event, input) => {

        // if this if/else doesn't exist, it puts a 0 there when the number is deleted, probably because of Number(). May be a better workaround.
        if (!event.target.value){
            this.setState({
                [input]:''
            }) 
        }
        // converting it from string to number before it's set to state, that way if we want to do math later, it will be an integer.
        // this will need to change ( remove Number() ) for text fields
        else{
            this.setState({
                    [input]: Number(event.target.value)
                })

        }
    }

    render() {
        return (
            <div>
                {JSON.stringify(this.state)}
                <br>
                </br>
                {JSON.stringify(this.props.reduxState)}
                <h1>How well are you understanding the content?</h1>
                <form onSubmit={this.handleSubmit}>
                    <input  
                        required 
                        min="1" 
                        max="10" 
                        type="number" 
                        placeholder="1-10"
                        value={this.state[stateKey]} 
                        onChange={(event) => this.handleChangeFor(event, stateKey)} />
                    <button type="submit">Next</button>
                </form>
            </div>
        )
    }
}

const putStateOnProps = (reduxState) => ({reduxState});
export default connect(putStateOnProps)(Understand);
import React, { Component } from 'react';
import './Support.css';

// material-ui
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

// Redux stuff
import { connect } from 'react-redux';

// material-ui
const styles = theme => ({
    textField: {
      width: 120
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
    leftIcon: {
        marginRight: theme.spacing.unit,
    },
  });

// this one will become the key of the key:value inside state so that this template is dynamic across components.
const stateKey = 'support'

class Support extends Component {

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
        this.props.history.push('/comments')
    }

    // function to move to the previous page, this will need to change between components unless I make it dynamic (maybe TODO)
    previousPage = () => {
        this.props.history.push('/understand')
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

        // material-ui
        const { classes } = this.props; 

        return (
            <div>
                <h1>How well are you being supported?</h1>
                <form onSubmit={this.handleSubmit}>
                    <TextField  
                        autoFocus
                        id="standard-number"
                        className={classes.textField}
                        label="Number 1-10"  
                        required 
                        InputProps={{
                            inputProps: { 
                                max: 10, min: 1 
                            }
                        }} 
                        type="number" 
                        value={this.state[stateKey]} 
                        onChange={(event) => this.handleChangeFor(event, stateKey)} />
                        <br></br>
                    <Button
                        className={classes.button}
                        variant="contained"
                        type="submit">
                        Next
                        <ArrowForwardIcon className={classes.rightIcon} />
                    </Button>
                </form>
                <Button
                    className={classes.button}
                    variant="contained"
                    onClick={this.previousPage}>
                    <ArrowBackIcon className={classes.leftIcon} />
                    Previous
                </Button>
            </div>
        )
    }
}

const putStateOnProps = (reduxState) => ({reduxState});
export default connect(putStateOnProps)(withStyles(styles)(Support));
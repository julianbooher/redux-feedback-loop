import React, { Component } from 'react';
import './Comments.css';

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
      width: 250
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
    leftIcon: {
        marginRight: theme.spacing.unit,
    },
  });

// this one will become the key of the key:value inside state so that this template is dynamic across components.
const stateKey = 'comments'

class Comments extends Component {

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
        // TODO go to final page
        this.props.history.push('/review')
    }

    // function to move to the previous page, this will need to change between components unless I make it dynamic (maybe TODO)
    previousPage = () => {
        this.props.history.push('/support')
    }


    handleChangeFor = (event, input) => {
        this.setState({
                [input]: event.target.value
            })

        }

    render() {

        // material-ui
        const { classes } = this.props; 

        return (
            <div>
                <h1>Any comments you would like to add?</h1>
                <form onSubmit={this.handleSubmit}>
                    <TextField  
                        autoFocus
                        id="standard-multiline-static"
                        className={classes.textField}
                        label="Comments (optional)"
                        multiline
                        rows="4"
                        inputProps={{ maxLength: 250 }}
                        value={this.state[stateKey]} 
                        onChange={(event) => this.handleChangeFor(event, stateKey)} />
                        <br></br>
                    <Button 
                        variant="contained"
                        type="submit">
                        Next
                        <ArrowForwardIcon className={classes.rightIcon} />
                    </Button>
                </form>
                <Button 
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
export default connect(putStateOnProps)(withStyles(styles)(Comments));
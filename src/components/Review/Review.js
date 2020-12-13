import React, { Component } from 'react';
import axios from 'axios';
import './Review.css';

// material-ui
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import SendIcon from '@material-ui/icons/Send';


// Redux stuff
import { connect } from 'react-redux';

// material-ui
const styles = theme => ({
      leftIcon: {
        marginRight: theme.spacing.unit,
      },
      rightIcon: {
        marginLeft: theme.spacing.unit,
      },
   
  });

class Review extends Component {

    submitFeedback = () => {
        axios.post('/feedback', this.props.reduxState)
        .then((response) => {
            // TODO dispatch to reset redux state
            this.props.dispatch({type: 'RESET_FEEDBACK'})
            // TODO send user back to success page
            this.props.history.push('/success')
        })
        .catch((error) => {
            console.log('Error in client POST', error)
        })
    }

    // function to move to the previous page, this will need to change between components unless I make it dynamic (maybe TODO)
    previousPage = () => {
        this.props.history.push('/comments')
    }

    disabledSubmit = () => {
        if(this.props.reduxState.feeling === '' || 
        this.props.reduxState.understanding === '' || 
        this.props.reduxState.support === ''){
            return 'true';
        }
        return 'false';
    }
    
    render() {

        // material-ui
        const { classes } = this.props;

        return (
            <div>
                <h1>Review Your Feedback</h1>
                <p>Feeling: {this.props.reduxState.feeling}</p>
                <p>Understanding: {this.props.reduxState.understanding}</p>
                <p>Support: {this.props.reduxState.support}</p>
                {/* TODO - conditional rendering if comment/not? */}
                <p>Comments: {this.props.reduxState.comments}</p>
                
                {/* conditional rendering disables button if a required field is missing in redux */}
                {this.props.reduxState.feeling === '' || 
                this.props.reduxState.understanding === '' || 
                this.props.reduxState.support === '' ? 
                <>
                    <p className="error-message">Missing required field. Go back and fill out every field.</p>
                    <Button
                    className={classes.button}
                    variant="contained"
                    disabled>
                        Submit
                        <SendIcon className={classes.rightIcon}/>
                    </Button>
                </>
                :
                <Button 
                                        
                    className={classes.button}
                    variant="contained"
                    onClick={this.submitFeedback}>
                    Submit
                    <SendIcon className={classes.rightIcon}/>
                </Button>

                }
                <br></br>
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
export default connect(putStateOnProps)(withStyles(styles)(Review));
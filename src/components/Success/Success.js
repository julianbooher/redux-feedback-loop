import React, { Component } from 'react';
import './Success.css';

// Redux stuff
import { connect } from 'react-redux';

// material-ui
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import FavoriteIcon from '@material-ui/icons/Favorite';

// material-ui
const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
      },
      leftIcon: {
        marginRight: theme.spacing.unit,
      },
      rightIcon: {
        marginLeft: theme.spacing.unit,
      },

  });

class Success extends Component {

    leaveNewFeedback = () => {
        this.props.history.push('/');
    }

    render() {

        // material-ui
        const { classes } = this.props;

        return (
            <div>
                <h1>Feedback submitted successfully!</h1>
                <h1><FavoriteIcon/></h1>
                <Button
                    className={classes.button}
                    variant="contained"
                    onClick={this.leaveNewFeedback}>
                    Leave New Feedback
                    <AutorenewIcon className={classes.rightIcon}/>
                </Button>
            </div>
        )
    }
}

const putStateOnProps = (reduxState) => ({reduxState});
export default connect(putStateOnProps)(withStyles(styles)(Success));
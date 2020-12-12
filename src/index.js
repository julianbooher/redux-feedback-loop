import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

// Redux

// MAY NEED TO ADD combineReducers to redux import
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';


const feedbackReducer = (
    state = {
        feeling: 1,
        understanding: 1,
        support: 1,
        comment: ''
    }, 
    action) => {
    // TODO set initial state to default initial values, and then add component did mount for each component and set state to feedback reducer. The user can go back and it will retain the previous value that the form had. 
    //TODO action type
    // state is an object, so we're just gonna update one key:value pair at a time using the payload.
    // payload will contain a key and a value.

    if(action.type === 'UPDATE_VALUE'){
        console.log(action.payload);
        let returnState = {
            ...state,
            [action.payload.key]: action.payload.value
        }
        console.log(returnState);
        return returnState
    }
    return state;
}

const storeInstance = createStore (

    feedbackReducer,
    applyMiddleware(logger)

)




ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
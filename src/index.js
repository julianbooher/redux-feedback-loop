import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';


// MAY NEED TO ADD combineReducers to redux import
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';

// base redux state for feedbackReducer
const baseFeedback = {
    feeling: '',
    understanding: '',
    support: '',
    comments: ''
}

const feedbackReducer = (
    state = baseFeedback, 
    action) => {

    // state is an object, so we're just gonna update one key:value pair at a time using the payload.
    // this action is dynamic, so that no matter which component is calling it, it just updates the value that corresponds to that component.
    if(action.type === 'UPDATE_VALUE'){
        console.log(action.payload);
        let returnState = {
            ...state,
            ...action.payload
        }
        
        return returnState
    }

    if (action.type === 'RESET_FEEDBACK'){
        return baseFeedback
    }


    return state;
}

const storeInstance = createStore (

    feedbackReducer,
    applyMiddleware(logger)

)




ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
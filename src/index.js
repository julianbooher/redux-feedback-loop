import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

// Redux

// MAY NEED TO ADD combineReducers to redux import
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';


const feedbackReducer = (state = {}, action) => {
    //TODO action type
    // state is an object, so we're just gonna update one key:value pair at a time using the payload.
    // payload will contain a key and a value.
    return state;
}

const storeInstance = createStore (

    feedbackReducer,
    applyMiddleware(logger)

)




ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
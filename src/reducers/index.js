import { combineReducers } from 'redux';
import { messagesReducer } from './messages.js';

const chatReducer = combineReducers({
    messagesReducer
});

export default chatReducer;
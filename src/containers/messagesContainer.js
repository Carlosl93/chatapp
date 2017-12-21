import { connect } from 'react-redux';

import { 
    listMessages as listMessageAction
 } from '../actions/messages.js';

import Chat from '../components/Chat.jsx';

const statesMap = state => {
    console.log(state);
    return {
        messages: state.messagesReducer.messages
    }
};

const dispatches = dispatch => {
    return {
        listMessages: () => dispatch( listMessageAction() )
    }
};

const messagesContainer = connect(statesMap, dispatches);
export default messagesContainer;
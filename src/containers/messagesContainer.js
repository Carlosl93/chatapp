import { connect } from 'react-redux';

import { 
    listMessages as listMessageAction,
    sendMessage as sendMessageAction
 } from '../actions/messages.js';

import Chat from '../components/ChatRoom/Chat.jsx';

const statesMap = state => {
    console.log(state);
    return {
        messages: state.messagesReducer.messages
    }
};

const dispatches = dispatch => {
    return {
        listMessages: () => dispatch( listMessageAction() ),
        sendMessage: (message) => dispatch( sendMessageAction(message) )
    }
};

const messagesContainer = connect(statesMap, dispatches);
export default messagesContainer;
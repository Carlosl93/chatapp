import database from '../firebase.js';
import uuid from 'uuid';

export const receiveMessages = (data) => {
    return {
        type: 'RECEIVE_MESSAGES',
        data
    }
};

export const sendMessage = (message) => {
    return dispatch => {
        const messageRef = database.ref('/messages');
        let id = uuid();
        let msg = {
            id: "02",
            timestamp: Date.now(),
            user: 'Jeuiop',
            message
        };

        messageRef.push(msg);
    }
};

export const listMessages = () => {
    return dispatch => {
        return database.ref("/messages").once("value", snap => {
            const data = snap.val();
            dispatch(receiveMessages(data));
        })
    }
};
import database from '../firebase.js';

export const receiveMessages = (data) => {
    return {
        type: 'RECEIVE_MESSAGES',
        data
    }
};

export const listMessages = () => {
    return dispatch => {
        return database.ref("/messages").once("value", snap => {
            const data = snap.val();
            console.log('listMessages', data);
            dispatch( receiveMessages(data) );
        })
    }
};
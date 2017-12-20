import database from '../firebase.js';

export const sendMessage = (data) => ({
    type: 'SEND_MESSAGE',
    data
});

export const receiveMessages = (data) => ({
    type: 'RECEIVE_MESSAGES',
    data
});

export const listMessages = () => {
    return dispatch => {
        return database.ref("/messages").once("messages", snap => {
            const data = snap.val();
            dispatch(receiveMessages(data))
            console.log(data);
        })
    }
}
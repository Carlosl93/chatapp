import uuid from "uuid";

const initialState = {
    messages: [
        {
            id: '2131231231',
            user: "Jeuiop",
            message: "Hello world!",
            timestamp: '1231231312'
        }
    ]
};

export const messagesReducer = (state = initialState, action) => {
    switch(action.type){
        case "SEND_MESSAGE": 
            return {
                messages: [
                    ...state.messages,
                    {   
                        id: uuid(),
                        timestamp: Date.now(),
                        message: action.data.message,
                        user: 'Jeuiop'
                    }
                ]
            }
        default:
            return state;
    }
};  
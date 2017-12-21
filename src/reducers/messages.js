import uuid from "uuid";

const initialState = {
    messages: [

    ]
};

export const messagesReducer = (state = initialState, action) => {
    switch(action.type){
        case "RECEIVE_MESSAGES": 
            return {
                messages: 
                    Object.keys(action.data).map(
                        (item) => action.data[item]
                    )                
            }
        default:
            return state;
    }
};  
import { ADD_CHAT, ADD_MESSAGE, DELETE_CHAT } from "./actions"

const initialState = {

};

export const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CHAT: {
            return {
                ...state,
                [action.payload]: [],
            };
        }
        case DELETE_CHAT: {

            const chats = { ...state };
            delete chats[action.payload];
            return chats;
        }
        case ADD_MESSAGE: {
            return {
                ...state,
                [action.payload.chatName]: [
                    ...state[action.payload.chatName],
                    {
                        author: action.payload.author,
                        text: action.payload.text,
                    },
                ],
            };
        }
        default:
            return state;
    }
};
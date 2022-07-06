export const ADD_CHAT = 'CHATS::ADD_CHAT';
export const DELETE_CHAT = 'CHATS::DELETE_CHAT';
export const ADD_MESSAGE = 'CHATS::ADD_MESSAGE';

export const addChat = (newChat) => ({
    type: ADD_CHAT,
    payload: newChat,
});

export const deleteChat = (chatName) => ({
    type: DELETE_CHAT,
    payload: chatName,
});

export const addMessage = (chatName, author, text) => ({
    type: ADD_MESSAGE,
    payload: {
        chatName,
        text,
        author,
    },
});

let timeout;

export const addMesssageWithReply = (chatName, author, text) => (dispatch) => {
    dispatch(addMessage(chatName, author, text));
    if (author !== 'BOT') {
        if (timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(() => dispatch(addMessage(chatName, 'BOT', "BOT: Сообщение получено")), 1000);

    }
};

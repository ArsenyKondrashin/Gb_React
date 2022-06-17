import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';
import { FC, useState } from "react";
import { Main } from "./pages/Main";
import { Profile } from "./pages/Profile";
import { Header } from "./components/Header";
import { Message } from "./components/Message";
import { ChatList } from "./components/ChatList";
import { Provider } from "react-redux";
import { store } from "./store";



export const App = () => {
    const [chats, setChats] = useState([]);
    const [list, setList] = useState([]);
    const AddChat = (newchat) => {
        setChats([...chats, newchat]);
    };
    const AddMsg = (newmsg) => {
        setList([...list, newmsg]);
    };


    return (
        <Provider store={store} >
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Header />}>
                        <Route index element={<Main />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/chats">
                            <Route index element={<ChatList chats={chats} AddChat={AddChat} />} />
                            <Route path=":chatId" element={<Message chats={chats} AddChat={AddChat} list={list} AddMsg={AddMsg} />} />
                        </Route>
                    </Route>
                    <Route path="*" element={<h2>Error 404 page not found</h2>} />
                </Routes>

            </BrowserRouter>
        </Provider>
    );
}

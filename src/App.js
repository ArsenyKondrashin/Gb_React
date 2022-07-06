import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';
import { Main } from "./pages/Main";
import { Profile } from "./pages/Profile";
import { Header } from "./components/Header";
import { Message } from "./components/Message";
import { ChatList } from "./components/ChatList";
import { Provider } from "react-redux";
import { persistor, store } from "./store";
import { PersistGate } from "redux-persist/integration/react";



export const App = () => {


    return (
        <Provider store={store} >
            <PersistGate loading={null} persistor={persistor}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Header />}>
                            <Route index element={<Main />} />
                            <Route path="/profile" element={<Profile />} />
                            <Route path="/chats">
                                <Route index element={<ChatList />} />
                                <Route path=":chatId" element={<Message />} />
                            </Route>
                        </Route>
                        <Route path="*" element={<h2>Error 404 page not found</h2>} />
                    </Routes>

                </BrowserRouter>
            </PersistGate>
        </Provider>
    );
}

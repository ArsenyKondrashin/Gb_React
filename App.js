import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';
import { Main } from "./pages/Main";
import { Profile } from "./pages/Profile";
import { Chats } from "./pages/Chats";
import { Header } from "./components/Header";


export const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Header />}>
                    <Route index element={<Main />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/chats" element={<Chats />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

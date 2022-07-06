import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ChatList } from "../components/ChatList";
import { Message } from "../components/Message";

export const Chats = () => {
    const chatId = useParams();
    const list = useSelector((state) => state.chats)
    return (
        <Message/>
    );
}
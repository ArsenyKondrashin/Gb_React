import { useState } from "react";
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { ChatList } from "./ChatList";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addMesssageWithReply } from "../store/chats/actions";
import { store } from "../store";

export const Message = () => {
    const [value, setValue] = useState();
    const { chatId } = useParams();
    const list = useSelector((state) => state.chats[chatId])
    const copy = (list ? list : [])
    const newMessage = (e) => {
        e.preventDefault();
        store.dispatch(addMesssageWithReply(chatId, 'USER', `USER: ${value}`))
        setValue('');
    }
    const change = (el) => {
        const textValue = el.target.value;
        setValue(textValue);
    }
    // useEffect(() => {
    //     if (list.length) {
    //        if (copy.pop().author === 'USER') {
    //           AddMsg({ author: 'BOT', text: "BOT: Сообщение получено" });
    //       }
    //   }
    // eslint-disable-next-line
    //    }, [copy]);
    return <>
        <ChatList />
        <form class="form" onSubmit={newMessage}>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off">
                <TextField id="outlined-basic" label="Введите сообщение" variant="outlined" value={value} onChange={change} autoFocus={true} />

            </Box>
            <Button variant="contained" type="submit">SUBMIT</Button>
        </form>
        <div className="columns">


            <h3>Список сообщений:</h3>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {copy.map((value) => (
                    <div className="text">
                        <ListItem key={value.text} disableGutters>
                            <ListItemText primary={`${value.text}`} />
                        </ListItem>
                    </div>
                ))}
            </List>


        </div>
    </>
}
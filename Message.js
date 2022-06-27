import { useState } from "react";
import { useEffect } from "react";
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { ChatList } from "./ChatList";

export const Message = ({ chats, AddChat, AddMsg, list }) => {
    const [value, setValue] = useState();
    const copy = Object.assign([], list);
    const newMessage = (el) => {
        AddMsg({
            author: 'USER',
            text: `USER: ${value}`
        });
        setValue('');
    }
    const change = (el) => {
        const textValue = el.target.value;
        setValue(textValue);
    }
    useEffect(() => {
        if (list.length) {
            if (copy.pop().author === 'USER') {
                AddMsg({ author: 'BOT', text: "BOT: Сообщение получено" });
            }
        }
        // eslint-disable-next-line
    }, [copy]);
    return <>
        <ChatList chats={chats} AddChat={AddChat} />
        <form action="#" class="form" onSubmit={newMessage}>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off">
                <TextField id="outlined-basic" label="Введите сообщение" variant="outlined" value={value} onChange={change} autoFocus={true} />

            </Box>
            <Button variant="contained" onClick={newMessage}>SUBMIT</Button>
        </form>
        <div className="columns">


            <h3>Список сообщений:</h3>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {list.map((value) => (
                    <div className="text">
                        <ListItem
                            key={value.text}
                            disableGutters
                            secondaryAction={
                                <IconButton aria-label="comment">
                                </IconButton>
                            }
                        >
                            <ListItemText primary={`${value.text}`} />
                        </ListItem>
                    </div>
                ))}
            </List>


        </div>
    </>
}
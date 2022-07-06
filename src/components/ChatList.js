import { Button, ListItem, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { store } from "../store";
import { addChat, deleteChat } from "../store/chats/actions";

export const ChatList = () => {
    const chats = useSelector((state) => Object.keys(state.chats).map((chat) => ({
        name: chat,
    })));
    const chats2 = useSelector((state) => state.chats);
    const [value, setValue] = useState('')
    const newChat = (e) => {

        if (value) {
            store.dispatch(addChat(value))
        }
        console.log(chats2);
        console.log(chats);
        setValue('');
    }
    const change = (e) => {
        setValue(e.target.value);
    }

    return (
        <>
            <form action="#" className="form" onSubmit={newChat}>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off">
                    <TextField id="outlined-basic" label="Введите название чата" variant="outlined" value={value} onChange={change} autoFocus={true} />

                </Box>
                <Button variant="contained" onClick={newChat}>SUBMIT</Button>
            </form>
            <ul>
                {chats.map((value) => (
                    <ListItem
                        key={value.name}
                        disableGutters>
                        <Link to={`/chats/${value.name}`}>{`${value.name}`}</Link>
                        <button onClick={() => { store.dispatch(deleteChat(value.name)) }}>X</button>
                    </ListItem>
                ))}
            </ul>
        </>
    );
}
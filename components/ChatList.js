import { Button, ListItem, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { Link } from "react-router-dom";

export const ChatList = ({ chats, AddChat }) => {
    const [value, setValue] = useState('')

    const newChat = (e) => {
        e.preventDefault();

        if (value) {
            AddChat({
                id: 1,
                name: value,
            });
        }
        setValue('');
    }
    const change = (e) => {
        setValue(e.target.value);
    }

    return (
        <>
            <form action="#" class="form" onSubmit={newChat}>
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
                        disableGutters

                    >
                        <Link to={`/chats/${value.name}`}>{`${value.name}`}</Link>
                    </ListItem>
                ))}
            </ul>
        </>
    );
}
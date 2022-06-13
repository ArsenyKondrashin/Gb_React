import { Button, ListItem, ListItemText, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { Link } from "react-router-dom";

export const ChatList = () => {
    const [value, setValue] = useState('')
    const [list, setList] = useState([])
    const copy = Object.assign([], list);
    const newChat = (e) => {


        if (value) {
            copy.push({
                id: 1,
                name: value,
            })
            setList(copy);
        }
        setValue('');
    }
    const change = (e) => {
        setValue(e.target.value);
    }

    return (
        <>
            <form action="#" class="form">
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off">
                    <TextField id="outlined-basic" label="Введите название чата" variant="outlined" onChange={change} autoFocus={true} />

                </Box>
                <Button variant="contained" onClick={newChat}>SUBMIT</Button>
            </form>
            <ul>
                {list.map((value) => (
                    <ListItem
                        key={value}
                        disableGutters

                    >
                        <Link to={`/chats/${value.name}`}>{`${value.name}`}</Link>
                    </ListItem>
                ))}
            </ul>
        </>
    );
}
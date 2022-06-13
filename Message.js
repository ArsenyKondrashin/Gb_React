import { useState } from "react";
import { useEffect } from "react";
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const Message = () => {
    const [list, setList] = useState([]);
    const [chatList, setChatList] = useState([{ id: 'chat1', name: "Чат №1" }]);
    const [value, setValue] = useState();
    const copy = Object.assign([], list);
    const newMessage = (el) => {
        copy.push({ author: true, text: `${value}` })
        setList(copy);
    }
    const change = (el) => {
        const textValue = el.target.value;
        setValue(textValue);
    }
    useEffect(() => {
        let listCopy = list;
        if (listCopy.length) {
            let last = listCopy.pop();
            if (last.author) {
                copy.push({ author: false, text: "Сообщение получено" });
                setList(copy);
            }
        }
        // eslint-disable-next-line
    }, [copy]);
    return <>
        <form action="#" class="form" onSubmit={newMessage}>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off">
                <TextField id="outlined-basic" label="Введите сообщение" variant="outlined" onChange={change} autoFocus={true} />

            </Box>
            <Button variant="contained" onClick={newMessage}>SUBMIT</Button>
        </form>
        <div className="columns">
            <div className="column1">
                <h3>Список чатов:</h3>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    {chatList.map((value) => (
                        <div className="text">
                            <ListItem
                                key={value}
                                disableGutters
                                secondaryAction={
                                    <IconButton aria-label="comment">
                                    </IconButton>
                                }
                            >
                                <ListItemText primary={`${value.name}`} />
                            </ListItem>
                        </div>
                    ))}
                </List>
            </div>
            <div className="column2">
                <h3>Список сообщений:</h3>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    {list.map((value) => (
                        <div className="text">
                            <ListItem
                                key={value}
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

        </div>
    </>
}
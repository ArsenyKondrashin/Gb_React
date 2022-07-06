import { useState } from "react";
import { useSelector } from "react-redux";
import { store } from "../store";
import { changeName, toggleProfile } from "../store/profile/actions";


export const Profile = () => {
    const visible = useSelector((state) => state.profile.visible)
    const name = useSelector((state) => state.profile.name)
    const [value, setValue] = useState('');
    const newName = (e) => {
        setValue(e.target.value);
    };
    return (
        <>
            <h2>Profile page</h2>

            <h3>Visibility:</h3>
            <input type="checkbox" checked={visible} readOnly ></input>
            <button onClick={() => { store.dispatch(toggleProfile()); console.log(visible); }}>change visible</button>
            <hr />
            <h3>Ваше имя: {name ? name : "Аноним"}</h3>
            <input type="text" label="Введите имя" onChange={newName}></input>
            <button onClick={() => { store.dispatch(changeName(value)); console.log(name); }}>change name</button>

        </>
    );
}
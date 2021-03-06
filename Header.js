import { NavLink, Outlet } from "react-router-dom";

export const navigate = [
    {
        id: 1,
        name: 'Main',
        to: '/',
    },
    {
        id: 2,
        name: 'Profile',
        to: '/profile',
    },
    {
        id: 3,
        name: 'Chats',
        to: '/chats',
    }
]


export const Header = () => {

    return (
        <>
            <header style={{
                backgroundColor: 'grey',
            }}>
                <ul style={{
                    display: 'flex',
                    justifyContent: 'space-around'
                }}>
                    {navigate.map((link => (
                        <li key={link.name}>
                            <NavLink to={link.to} style={({ isActive }) => ({ color: isActive ? 'orange' : 'blue' })} >{link.name}</NavLink>
                        </li>
                    )))}
                </ul>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    );
}
// in src/MyLoginPage.js
import * as React from 'react';
import { useState } from 'react';
import { useLogin, useNotify, Notification, defaultTheme } from 'react-admin';
import { ThemeProvider } from '@material-ui/styles';
import { createTheme } from '@material-ui/core/styles';
import { Login } from 'ra-ui-materialui';
const MyLoginPage = ({ theme }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const login = useLogin();
    const notify = useNotify();
    const submit = e => {
        e.preventDefault();
        // will call authProvider.login({ email, password })
        login( {username, password} ).catch((err) => {
            console.log(err)
            notify("invalid password or email", 'warning');
        })
    };

    return (
        <Login>
        <ThemeProvider theme={createTheme(defaultTheme)}>
            <form >
                <input
                    name="user"
                    type="user"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <input
                    name="password"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <button onClick={submit}>submit </button>
            </form>
            <Notification />
        </ThemeProvider>
        </Login>
    );
};

export default MyLoginPage;
import React, {useEffect, useState} from 'react';
import './../styles/login.css'
import {Button, Card, TextField} from "@mui/material";

const loginRequestUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBZx7sNZiAK-1LkyJYbqQYqe8VxkNgQyt8';

function Login() {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [errorText, setErrorText] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        localStorage.removeItem('JWT');
    }, []);

    const login = () => {
        setLoading(true);

        const body = {
            email: username,
            password: password,
            returnSecureToken: true
        }

        fetch(loginRequestUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }).then(response => {
            if (!response.ok) {
                setErrorText('Login failed');
                return;
            }

            setErrorText('');

            response.json().then(value => {
                localStorage.setItem('JWT', value.idToken);
                window.location.replace('/');
            })
        }).finally(() => {
            setLoading(false);
        });
    }

    return (
        <div className="Login">
            <form>
                <Card variant={"elevation"} className={'card'}>
                    <h1>Login</h1>
                    <div className="loginContainer">
                        <TextField
                            label="Email"
                            variant="outlined"
                            className={'inputField'}
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <TextField
                            label="Passwort"
                            type="password"
                            variant="outlined"
                            className={'inputField'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {
                            errorText && <p className={'error-text'}>{errorText}</p>
                        }
                        <div className="buttons">
                            <Button type="button" variant="contained" disabled={loading} onClick={login}>Login</Button>
                        </div>
                        <a href={"/register"}>
                            <p>Registrieren</p>
                        </a>
                    </div>
                </Card>
            </form>
        </div>
    )
}

export default Login;
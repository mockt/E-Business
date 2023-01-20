import React, {useState} from 'react';
import {Button, Card, TextField} from "@mui/material";
import './../styles/register.css'

const registerRequestUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBZx7sNZiAK-1LkyJYbqQYqe8VxkNgQyt8';

function Register() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [repeatPassword, setRepeatPassword] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [errorText, setErrorText] = useState<string>('');

    const register = () => {
        if (password !== repeatPassword) {
            setErrorText("The passwords don't match");
            return;
        }

        setLoading(true);

        const body = {
            email: email,
            password: password,
            returnSecureToken: true
        }

        fetch(registerRequestUrl, {
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
        <div className={"register"}>
            <form>
                <Card variant={"elevation"} className={'card'}>
                    <h1>Registrieren</h1>
                    <div className="registerContainer">
                        <TextField
                            label="Email"
                            variant="outlined"
                            className={'inputField'}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            label="Passwort"
                            type="password"
                            variant="outlined"
                            className={'inputField'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <TextField
                            label="Passwort wiederholen"
                            type="password"
                            variant="outlined"
                            className={'inputField'}
                            value={repeatPassword}
                            onChange={(e) => setRepeatPassword(e.target.value)}
                        />
                        {
                            errorText && <p className={'error-text'}>{errorText}</p>
                        }
                        <div className="buttons">
                            <Button type="button" variant="contained" disabled={loading} onClick={register}>Registrieren</Button>
                        </div>
                        <a href={"/login"}>
                            <p>Login</p>
                        </a>
                    </div>
                </Card>
            </form>

        </div>
    )

}

export default Register;
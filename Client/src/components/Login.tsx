import React from 'react';
import './../styles/login.css'
import {Button, Card, TextField} from "@mui/material";

function Login() {
    return (
        <div className="Login">
            <form>
                <Card variant={"elevation"} className={'card'}>
                    <h1>Login</h1>
                    <div className="loginContainer">
                        <TextField label="Email" variant="outlined" className={'inputField'}/>
                        <TextField label="Passwort" type="password" variant="outlined" className={'inputField'}/>
                        <div className="buttons">
                            <Button type="submit" variant="contained">Login</Button>
                            <Button type="button" variant="contained"> Cancel</Button>
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
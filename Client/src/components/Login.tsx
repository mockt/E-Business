import React from 'react';
import './../styles/login.css'
import {Button, Card, TextField} from "@mui/material";

function Login() {
    return (
        <div className="Login">
            <form>
                <Card variant={"elevation"} className={'card'}>
                    <div className="loginContainer">
                        <TextField label="Username" variant="outlined" className={'inputField'}/>
                        <TextField label="Passwort" variant="outlined" className={'inputField'}/>
                        <div className="buttons">
                            <Button type="submit" variant="contained">Login</Button>
                            <Button type="button" variant="contained"> Cancel</Button>
                        </div>
                    </div>
                </Card>
            </form>
        </div>
    )
}

export default Login;
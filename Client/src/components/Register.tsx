import React from 'react';
import {Button, Card, TextField} from "@mui/material";
import './../styles/register.css'


function Register() {
    return (
        <div className={"register"}>
            <form>
                <Card variant={"elevation"} className={'card'}>
                    <h1>Registrieren</h1>
                    <div className="registerContainer">
                        <TextField label="Email" variant="outlined" className={'inputField'}/>
                        <TextField label="Passwort" type="password" variant="outlined" className={'inputField'}/>
                        <TextField label="Passwort wiederholen" type="password" variant="outlined" className={'inputField'}/>
                        <div className="buttons">
                            <Button type="submit" variant="contained">Registrieren</Button>
                            <a href={"/login"}>
                            <Button type="button" variant="contained">Cancel</Button>
                            </a>
                        </div>
                    </div>
                </Card>
            </form>

        </div>
    )

}

export default Register;
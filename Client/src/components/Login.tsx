import React from 'react';
import './../styles/login.css'

function Login() {
    return (
        <div className="Login">
            <form>
                <div className="card">
                    <div className="loginContainer">
                        <label>Username : </label>
                        <input type="text" placeholder="Enter Username" name="username" required></input>
                        <label>Password : </label>
                        <input type="password" placeholder="Enter Password" name="password" required></input>
                        <div className="buttons">
                            <button type="submit">Login</button>
                            <button type="button" className="cancelbtn"> Cancel</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login;
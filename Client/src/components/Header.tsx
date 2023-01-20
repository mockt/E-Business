import './../styles/header.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React from "react";


function Header() {
    return (
        <header>
            <a href={"/"}>
                <h1>Donut Store</h1>
            </a>
            <a href={"/login"}>
                <AccountCircleIcon sx={{fontSize: 50}} className={'login-icon'}/>
            </a>

        </header>
    )
}


export default Header;
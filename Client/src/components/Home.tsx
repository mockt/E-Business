import React, {useEffect, useState} from "react";
import {Button, ButtonProps, Card, styled} from "@mui/material";
import './../styles/home.css'
import donutpicture from '../img/img.png';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const ApiUrl = 'http://localhost:5001/Topping'

const ColorButton = styled(Button)<ButtonProps>(({theme}) => ({
    color: theme.palette.getContrastText('#fff'),
    backgroundColor: '#fff',
    '&:hover': {
        backgroundColor: '#fff',
    },
}));

function ToppingButton(props: {text: string}) {
    return (
        <ColorButton variant="outlined" className={'toppingbutton'}>
            <p>{props.text}</p>
        </ColorButton>
    );
}

function Home() {
    const [toppings, setToppings] = useState<{name: string}[]>();
    const [didLoad, setDidLoad] = useState<boolean>(false);

    useEffect(() => {
        const jwt = localStorage.getItem('JWT');

        if (!jwt) {
            window.location.replace("/login");
            return;
        }

        console.log(jwt);

        fetch(ApiUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + jwt
            }
        }).then((response) => response.json().then((body) => {
            setToppings(body);
            setDidLoad(true);
        })).catch(() => {
            //window.location.replace("/login");
        })
    }, []);

    if (!didLoad) {
        return <></>;
    }

    return (
        <div className={"home"}>
            <h1>Donut auswählen</h1>
            <div className={"donuts"}>
                <ColorButton variant="outlined" className={"donutButtons"}>
                    <div className={"buttonInhalt"}>
                        <img src={donutpicture} alt="Donut"/>
                        <h2>Donut Natur</h2>
                    </div>
                </ColorButton>
                <ColorButton variant="outlined" className={"donutButtons"}>
                    <div className={"buttonInhalt"}>
                        <img src={donutpicture} alt="Donut"/>
                        <h2>Donut Vegan</h2>
                    </div>
                </ColorButton>
                <ColorButton variant="outlined" className={"donutButtons"}>
                    <div className={"buttonInhalt"}>
                        <img src={donutpicture} alt="Donut"/>
                        <h2>Donut Gefüllt</h2>
                    </div>
                </ColorButton>
            </div>

            <h1>Glasur auswählen</h1>
            <div className={"glasur"}>
                <ColorButton variant="outlined" className={'glasurButtons'}>
                    <p>Milchschokolade</p>
                </ColorButton>
                <ColorButton variant="outlined" className={'glasurButtons'}>
                    <p>Weisse Schokolade</p>
                </ColorButton>
                <ColorButton variant="outlined" className={'glasurButtons'}>
                    <p>Bitterschokolade</p>
                </ColorButton>
                <ColorButton variant="outlined" className={'glasurButtons'}>
                    <p>Karamell</p>
                </ColorButton>
            </div>

            <h1>Toppings</h1>
            <div className={"toppings"}>
                {toppings?.map(topping =>
                    <ToppingButton text={topping.name}/>
                )}
            </div>

            <div className={"cartButton"}>
                <ColorButton variant={"contained"}> In den Warenkorb</ColorButton>
                <a href={"/cart"}>
                    <ShoppingCartOutlinedIcon/>
                </a>
            </div>

        </div>

    );
}

export default Home;
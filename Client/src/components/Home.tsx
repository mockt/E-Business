import React from "react";
import {Button, ButtonProps, Card, styled} from "@mui/material";
import './../styles/home.css'
import donutpicture from '../img/img.png';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText('#fff'),
    backgroundColor: '#fff',
    '&:hover': {
        backgroundColor: '#fff',
    },
}));

function Home() {

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
                <ColorButton variant="outlined" className={'toppingbutton'}>
                    <p>Erdbeeren</p>
                </ColorButton>
                <ColorButton variant="outlined" className={'toppingbutton'}>
                    <p>Blaubeeren</p>
                </ColorButton>
                <ColorButton variant="outlined" className={'toppingbutton'}>
                    <p>Kinderschokolade</p>
                </ColorButton>
                <ColorButton variant="outlined" className={'toppingbutton'}>
                    <p>M&M's</p>
                </ColorButton>
                <ColorButton variant="outlined" className={'toppingbutton'}>
                    <p>Toffee</p>
                </ColorButton>
                <ColorButton variant="outlined" className={'toppingbutton'}>
                    <p>Oreo</p>
                </ColorButton>
                <ColorButton variant="outlined" className={'toppingbutton'}>
                    <p>Kokosnussstreusel</p>
                </ColorButton>
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
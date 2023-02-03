import React, {useCallback, useEffect, useState} from "react";
import {Box, Button, ButtonProps, IconButton, styled} from "@mui/material";
import './../styles/home.css'
import donutpicture from '../img/img.png';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {Donut} from "./Cart";

const ApiUrl = 'http://localhost:5001/Topping'

const ColorButton = styled(Button)<ButtonProps & {selected?: boolean}>(({theme, selected}) => ({
    color: theme.palette.getContrastText('#fff'),
    backgroundColor: selected ? '#0096c7' : '#fff',
    '&:hover': {
        backgroundColor: selected ? '#0096c7' : '#fff',
    },
}));

function ToppingButton(props: {text: string, onClick: () => void, selected: boolean}) {
    return (
        <ColorButton variant="contained" className={'toppingbutton'} onClick={props.onClick} selected={props.selected}>
            <p>{props.text}</p>
        </ColorButton>
    );
}

function Home() {
    const [toppings, setToppings] = useState<{name: string}[]>();
    const [didLoad, setDidLoad] = useState<boolean>(false);
    const [donut, setDonut] = useState<Partial<Donut>>({toppings: []});
    const [error, setError] = useState<string>('');

    useEffect(() => {
        const jwt = localStorage.getItem('JWT');

        if (!jwt) {
            window.location.replace("/login");
            return;
        }

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
            window.location.replace("/login");
        })
    }, []);

    const toggleTopping = useCallback((topping: string) => {
        donut.toppings ??= [];

        if (donut.toppings.includes(topping)) {
            donut.toppings = donut.toppings.filter(value => value !== topping);
            setDonut({...donut});
            return;
        }

        donut.toppings.push(topping);
        setDonut({...donut});
    }, [donut]);

    const addToCart = useCallback(() => {
        if (!donut.glaze || !donut.type) {
            setError('Typ und Glasur müssen ausgewählt sein!');
            return;
        }
        setError('');

        donut.toppings ??= [];

        const cart: Donut[] = JSON.parse(localStorage.getItem('cart') ?? '[]');

        cart.push(donut as Donut);

        localStorage.setItem('cart', JSON.stringify(cart));
    }, [donut]);

    if (!didLoad) {
        return <></>;
    }

    return (
        <div className={"home"}>
            <h1>Donut auswählen</h1>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', pl: 1, pb: 1}}>
                <ColorButton variant="contained" className={"donutButtons"} selected={donut.type === 'Natur'} onClick={() => setDonut({...donut, type: 'Natur'})}>
                    <div className={"buttonInhalt"}>
                        <img src={donutpicture} alt="Donut"/>
                        <h2>Donut Natur</h2>
                    </div>
                </ColorButton>
                <ColorButton variant="contained" className={"donutButtons"} selected={donut.type === 'Vegan'} onClick={() => setDonut({...donut, type: 'Vegan'})}>
                    <div className={"buttonInhalt"}>
                        <img src={donutpicture} alt="Donut"/>
                        <h2>Donut Vegan</h2>
                    </div>
                </ColorButton>
                <ColorButton variant="contained" className={"donutButtons"} selected={donut.type === 'Filled'} onClick={() => setDonut({...donut, type: 'Filled'})}>
                    <div className={"buttonInhalt"}>
                        <img src={donutpicture} alt="Donut"/>
                        <h2>Donut Gefüllt</h2>
                    </div>
                </ColorButton>
            </Box>

            <h1>Glasur auswählen</h1>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', pl: 1, pb: 1}}>
                <ColorButton variant="contained" className={'glasurButtons'} selected={donut.glaze === 'Milk chocolate'} onClick={() => setDonut({...donut, glaze: 'Milk chocolate'})}>
                    <p>Milchschokolade</p>
                </ColorButton>
                <ColorButton variant="contained" className={'glasurButtons'} selected={donut.glaze === 'White chocolate'} onClick={() => setDonut({...donut, glaze: 'White chocolate'})}>
                    <p>Weisse Schokolade</p>
                </ColorButton>
                <ColorButton variant="contained" className={'glasurButtons'} selected={donut.glaze === 'Bitter chocolate'} onClick={() => setDonut({...donut, glaze: 'Bitter chocolate'})}>
                    <p>Bitterschokolade</p>
                </ColorButton>
                <ColorButton variant="contained" className={'glasurButtons'} selected={donut.glaze === 'Caramel'} onClick={() => setDonut({...donut, glaze: 'Caramel'})}>
                    <p>Karamell</p>
                </ColorButton>
            </Box>

            <h1>Toppings</h1>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', pl: 1, pb: 1, flexWrap: 'wrap'}}>
                {toppings?.map(topping =>
                    <ToppingButton text={topping.name} selected={donut.toppings?.includes(topping.name) ?? false} onClick={() => toggleTopping(topping.name)}/>
                )}
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', pl: 1, pb: 1, maxWidth: 300, margin: '20px auto'}}>
                <ColorButton variant={"contained"} onClick={addToCart}> In den Warenkorb</ColorButton>
                <a href={"/cart"}>
                    <IconButton>
                        <ShoppingCartOutlinedIcon/>
                    </IconButton>
                </a>
            </Box>

            <div className={'error-text'}>
                {error}
            </div>

        </div>

    );
}

export default Home;
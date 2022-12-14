import React from "react";
import {Card} from "@mui/material";
import './../styles/home.css'
import donutpicture from '../img/img.png';


function Home() {

    return (
        <div className={"home"}>
            <h1>Donut auswählen</h1>
            <div className={"donuts"}>
                    <Card variant={"elevation"} className={'card'}>
                        <img src={donutpicture} alt="Donut"/>
                        <div className={"cardConatiner"}>
                            <h2>Donut Natur</h2>
                        </div>
                    </Card>
                    <Card variant={"elevation"} className={'card'}>
                        <img src={donutpicture} alt="Donut"/>
                        <div className={"cardConatiner"}>
                            <h2>Donut Vegan</h2>

                        </div>
                    </Card>
                    <Card variant={"elevation"} className={'card'}>
                        <img src={donutpicture} alt="Donut"/>
                        <div className={"cardConatiner"}>
                            <h2>Donut Gefüllt</h2>
                        </div>
                    </Card>
            </div>

            <h1>Glasur auswählen</h1>
            <div className={"glasur"}>
                <Card variant={"elevation"} className={'card'}>
                    <p>Schokolade</p>

                </Card>
                <Card variant={"elevation"} className={'card'}>
                    <p>Weisse Schokolade</p>
                </Card>
            </div>

            <h1>Toppings</h1>
            <div className={"toppings"}>
                <Card variant={"elevation"} className={'card'}>
                    <p>Erdbeeren</p>
                </Card>
                <Card variant={"elevation"} className={'card'}>
                    <p>Blaubeeren</p>
                </Card>
                <Card variant={"elevation"} className={'card'}>
                    <p>Kinderschokolade</p>

                </Card>
            </div>
        </div>

    );
}

export default Home;
import './../styles/header.css'
import React from "react";
import {Card} from "@mui/material";
import {DataGrid, GridColDef, GridValueGetterParams} from '@mui/x-data-grid';


const columns: GridColDef[] = [
    {field: 'donut', headerName: 'Donut', width: 70 },
    {field: 'glasur', headerName: 'Glasur', width: 70 },
    {field: 'toppings', headerName: 'Toppings', width: 70 }

];

const rows = [
    {donut: 'Normal', glasur: 'Weisse Schokolade', toppings: 'Erdbeeren'},
    {donut: 'Vegan', glasur: 'Braune Schokolade', toppings: 'Toffee'},

];

function Cart() {
    return (
        <div>
            <Card variant={"elevation"} className={'card'}>
                <div>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        checkboxSelection
                    />
                </div>
                );

            </Card>

        </div>
    )
}


export default Cart;
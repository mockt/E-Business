import './../styles/cart.css'
import React, {useCallback, useState} from "react";
import {Box, Card, CardContent, Grid, IconButton, Typography} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

export interface Donut {
    type: 'Natur' | 'Vegan' | 'Filled';
    glaze: 'Milk chocolate' | 'White chocolate' | 'Bitter chocolate' | 'Caramel',
    toppings: string[]
}

function CartCard(props: {donut: Donut, onDelete: () => void}) {
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card variant={'elevation'}>
                <CardContent>
                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', pl: 1, pb: 1 }}>
                        <div>
                            <Typography variant={'h4'}>
                                {props.donut.type}
                            </Typography>
                            <Typography variant={'body1'}>
                                Glasur: {props.donut.glaze}
                            </Typography>
                            <Typography variant={'body1'}>
                                {props.donut.toppings.length > 0 ? 'Toppings: ' + props.donut.toppings.join(', ') : 'Keine Toppings'}
                            </Typography>
                        </div>
                        <IconButton aria-label="play/pause" className={'delete-icon'} onClick={props.onDelete}>
                            <DeleteIcon />
                        </IconButton>
                    </Box>
                </CardContent>
            </Card>
        </Grid>
    );
}

function Cart() {
    const [items, setItems] = useState<Donut[]>(JSON.parse(localStorage.getItem('cart') ?? '[]'));

    const onDelete = useCallback((index: number) => {
        const newItems = items.filter((value, index1) => index1 !== index);

        localStorage.setItem('cart', JSON.stringify(newItems));
        setItems(newItems);
    }, [items]);

    return (
        <div className={'cart-root'}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 4, md: 8, xl: 16 }}>
                {items.map((donut, index) => <CartCard donut={donut} onDelete={() => onDelete(index)} key={index}/>)}
            </Grid>
        </div>
    )
}


export default Cart;
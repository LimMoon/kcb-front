import React, { useState, useEffect } from 'react';
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Stack } from '@mui/material';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import bag from '../bag.png'
import GoodsCard from '../components/GoodsCard.js';
import customAxios from '../customAxios.js';


const useStyles = makeStyles((theme) => ({
    container: {
        background: "#000000",
    },
}));

const GoodsPage = () => {

    const [goods, setGoods] = useState('');
    function callback(data) {
        setGoods(data);
    }
    useEffect(
        () => {
            // 클라이언트의 IP주소를 알아내는 백엔드의 함수를 호출합니다.
            customAxios('/goods', callback);
        }, []
    );

    const classes = useStyles();

    return (
        <Container maxWidth="md" className={classes.container} >
            <Stack spacing={5}>
                <Box m="auto" width={500}>
                    <TextField fullWidth label="검색" id="search" />
                </Box>
                <Stack spacing={20} direction="row" justifyContent="center" alignItems="center">
                    <GoodsCard image={goods ? goods[0]["goodsImage"] : ""} name={goods ? goods[0]["name"] : ""} price={goods ? goods[0]["price"] : ""} />
                    <GoodsCard image={goods ? goods[1]["goodsImage"] : ""} name={goods ? goods[1]["name"] : ""} price={goods ? goods[1]["price"] : ""} />
                    <GoodsCard image={goods ? goods[2]["goodsImage"] : ""} name={goods ? goods[2]["name"] : ""} price={goods ? goods[2]["price"] : ""} />
                </Stack>
                <Stack spacing={20} direction="row" justifyContent="center" alignItems="center">
                    <GoodsCard image={goods ? goods[3]["goodsImage"] : ""} name={goods ? goods[3]["name"] : ""} price={goods ? goods[3]["price"] : ""} />
                    <GoodsCard image={goods ? goods[4]["goodsImage"] : ""} name={goods ? goods[4]["name"] : ""} price={goods ? goods[4]["price"] : ""} />
                    <GoodsCard image={goods ? goods[5]["goodsImage"] : ""} name={goods ? goods[5]["name"] : ""} price={goods ? goods[5]["price"] : ""} />
                </Stack>
            </Stack>
        </Container>
    );
};
export default GoodsPage;
import React from 'react';
import { Stack } from '@mui/material';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import bag from '../bag.png'
import GoodsCard from '../components/GoodsCard.js';

const GoodsPage = () => {
    return (
        <>
            <Box display="flex"
                sx={{
                    width: '100%'
                }}
                flexDirection="row"
                display="flex"
                bgcolor="#000000">
                <Box m="auto" width={500}>
                    <TextField fullWidth label="검색" id="search" />
                </Box>


            </Box>
            <Stack spacing={5}>
                <Stack spacing={20} direction="row" justifyContent="center" alignItems="center">
                    <GoodsCard image={bag} />
                    <GoodsCard image={bag} />
                    <GoodsCard image={bag} />
                </Stack>
                <Stack spacing={20} direction="row" justifyContent="center" alignItems="center">
                    <GoodsCard image={bag} />
                    <GoodsCard image={bag} />
                    <GoodsCard image={bag} />
                </Stack>
            </Stack>
        </>
    );
};
export default GoodsPage;
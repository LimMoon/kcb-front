import React from 'react';
import { Stack } from '@mui/material';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import MediaCard from '../components/MediaCard.js';
import beer from '../beer.png'

const BeerPage = () => {

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
                    <MediaCard image={beer} />
                    <MediaCard image={beer} />
                    <MediaCard image={beer} />
                </Stack>
                <Stack spacing={20} direction="row" justifyContent="center" alignItems="center">
                    <MediaCard image={beer} />
                    <MediaCard image={beer} />
                    <MediaCard image={beer} />
                </Stack>
            </Stack>
        </>
    );
};
export default BeerPage;
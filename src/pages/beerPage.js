import React from 'react';
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Stack } from '@mui/material';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import beer from '../beer.png'
import MediaCard from '../components/MediaCard';

const useStyles = makeStyles((theme) => ({
    container: {
        background: "#000000",
    },
}));

const BeerPage = () => {
    const classes = useStyles();

    return (

        <Container maxWidth="md" className={classes.container} >
            <Stack spacing={5}>
                <Box m="auto" width={500}>
                    <TextField fullWidth label="검색" id="search" />
                </Box>
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
        </Container>
    )
};
export default BeerPage;
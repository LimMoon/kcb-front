import React from 'react';
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Map from '../components/Map.js';
import { Stack } from '@mui/material';
import MapLocList from '../components/MapLocList.js';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    container: {
        background: "#000000",
    },
}));

const BrewPubPage = () => {
    const classes = useStyles();

    return (
        <Container maxWidth="md" className={classes.container} >
            <Stack direction="row" justifyContent="space-evenly" spacing={2}>
                <Stack justifyContent="flex-start">
                    <MapLocList />
                </Stack>
                <Stack spacing={5} justifyContent="center" alignItems="center">
                    <Box m="auto" width={500}>
                        <TextField fullWidth label="검색" id="search" />
                    </Box>
                    <Map />
                </Stack>
            </Stack>
        </Container>
    );
};
export default BrewPubPage;
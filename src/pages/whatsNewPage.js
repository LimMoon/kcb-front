import React from 'react';
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Stack } from '@mui/material';
import Typography from '@mui/material/Typography';

import bag from '../bag.png'
import EventsCard from '../components/EventsCard.js';

const useStyles = makeStyles((theme) => ({
    container: {
        background: "#000000",
    },
}));

const Home = () => {
    const classes = useStyles();

    return (
        <Container maxWidth="md" className={classes.container} >
            <Stack spacing={5}>


                <Typography color="#ffffff" variant="h5" >Events</Typography>
                <Stack spacing={20} direction="row" justifyContent="center" alignItems="center">
                    <EventsCard image={bag} />
                    <EventsCard image={bag} />
                    <EventsCard image={bag} />
                </Stack>
            </Stack>
        </Container>
    );
};
export default Home;
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function EventsCard(props) {
    return (
        <Card sx={{ minWidth: 200 }}>
            <CardMedia
                component="img"
                height="250"
                image={props.image}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="body2" component="div">
                    서울 집시 캔 릴리즈 데이
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    2021.12.30 ~ 31
                </Typography>
            </CardContent>
        </Card>
    );
}
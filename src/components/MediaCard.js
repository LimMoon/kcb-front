import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function MediaCard(props) {
    return (
        <Card sx={{ minWidth: 100 }}>
            <CardMedia
                component="img"
                height="340"
                image={props.image}
                alt="beer"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    ABC Porter
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    브루어리 이름
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    출시일정
                </Typography>
            </CardContent>
        </Card>
    );
}
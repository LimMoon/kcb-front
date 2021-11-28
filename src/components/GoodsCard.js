import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function GoodsCard(props) {
    return (
        <Card sx={{ minWidth: 150 }}>
            <CardMedia
                component="img"
                height="300"
                image={props.image}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    에코백
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    5000포인트
                </Typography>
            </CardContent>
        </Card>
    );
}
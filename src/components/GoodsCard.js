import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function GoodsCard(props) {
    var base64Image = 'data:image/png;base64,' + props.image;

    return (
        <Card sx={{ minWidth: 150 }}>
            <CardMedia
                component="img"
                height="300"
                image={base64Image}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="body1" component="div">
                    {props.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.price} 포인트
                </Typography>
            </CardContent>
        </Card>
    );
}
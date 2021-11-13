import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography'


const Service = (props) => {
    const { name, description, img } = props.service
    return (
        <Grid item xs={8} sm={4} md={4} >
            <Card sx={{ minWidth: 275 , border: 0 , boxShadow: 0 }}>
                <CardMedia
                    component="img"
                    style={{ width: "auto", height: '80px', margin: '0 auto' }}
                    image={img}
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} gutterBottom>
                        Word of the Day
                    </Typography>
                    <Typography variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" >
                        {description}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default Service;

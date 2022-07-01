import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getCoffee } from '../../store/actions/sampleAPI';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import style from './Coffees.module.css'
import { CircularProgress } from '@mui/material';

const coffeCard = ({ coffee }) => {
    return (
        <div className={style.coffeeCard}>
            <Card sx={{ maxWidth: 345, minHeight: 320 }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={coffee.image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {coffee.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {coffee.description}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}

const Coffees = () => {

    const coffeeStates = useSelector(state => state.sampleAPI)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCoffee.request())
    }, [])

    const { coffees, isLoading } = coffeeStates
    return (
        <div className={style.container}>
            {isLoading ? <div className={style.loader}><CircularProgress color="inherit" /></div> :
                <div>
                    {
                        coffees.length ?
                            <div className={style.coffeeCardWrapper}>
                                {coffees.map(coffee => (coffeCard({ coffee })))}
                            </div> :
                            <p>not found</p>
                    }
                </div>}
        </div>
    )
}

export default Coffees;

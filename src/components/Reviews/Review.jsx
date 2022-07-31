/* eslint-disable no-unused-vars */
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import React from 'react';
import useAuth from '../../hooks/useAuth';
import Rating from './Rating';

function Review({ userReview }) {
    const { name, comment, rating } = userReview;
    const { mobile } = useAuth();

    return (
        <Card
            style={{
                minHeight: `200px`,
                width: mobile ? `250px` : `350px`,
                margin: mobile ? `0px` : `0px 15px`,
                textAlign: `center`,
                border: `1px solid #ccc`,
            }}
        >
            <CardContent>
                <AccountCircleIcon style={{ color: `#1a213d`, height: `60px`, width: `60px` }} />
                <Typography>{name}</Typography>
                <Rating rating={rating} />
                <Typography style={{ marginTop: `16px` }}>{comment?.slice(0, 100)}</Typography>
            </CardContent>
        </Card>
    );
}

export default Review;

/* eslint-disable no-unused-vars */
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import React from 'react';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import Classes from '../../styles/Review.module.css';
import Rating from './Rating';

function Review({ userReview }) {
    const { name, comment, rating, _id } = userReview;
    const { mobile, user, isAdmin, allReviews, setAllReviews, getAllReviewsURL } = useAuth();

    const handleDeleteReview = (id) => {
        if (allReviews?.length <= 4) {
            Swal.fire("Sorry, you can't delete a package when total package is below 5");
        } else {
            const url = `http://localhost:5000/review/${id}`;

            fetch(url, {
                method: 'DELETE',
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data?.deletedCount > 0) {
                        Swal.fire('Review Deleted !');
                        axios.get(getAllReviewsURL).then((result) => setAllReviews(result?.data));
                    }
                });
        }
    };

    return (
        <Card
            style={{
                minHeight: `250px`,
                width: mobile ? `250px` : `350px`,
                margin: mobile ? `0px` : `0px 15px`,
                textAlign: `center`,
                border: `1px solid #ccc`,
            }}
        >
            <CardContent style={{ position: `relative` }}>
                {isAdmin && (
                    <DeleteIcon
                        style={{
                            position: `absolute`,
                            top: `5px`,
                            right: `5px`,
                            cursor: `pointer`,
                        }}
                        className={Classes.delete}
                        onClick={() => handleDeleteReview(_id)}
                    />
                )}
                <AccountCircleIcon style={{ color: `#1a213d`, height: `60px`, width: `60px` }} />
                <Typography>{name}</Typography>
                <Rating rating={rating} />
                <Typography style={{ marginTop: `16px` }}>{comment?.slice(0, 100)}</Typography>
            </CardContent>
        </Card>
    );
}

export default Review;

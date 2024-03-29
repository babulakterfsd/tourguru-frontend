/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import React from 'react';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import Classes from '../../styles/Review.module.css';
import Rating from './Rating';

function Review({ userReview, allReviews, setAllReviews }) {
    const { name, comment, rating, _id } = userReview;
    const { mobile, user, isAdmin } = useAuth();

    const handleDeleteReview = (id) => {
        if (allReviews?.length <= 5) {
            Swal.fire("Sorry, you can't delete a review when total review is below 5");
        } else {
            const url = `https://tourguru.onrender.com/review/${id}`;

            fetch(url, {
                method: 'DELETE',
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data?.deletedCount > 0) {
                        Swal.fire('Review Deleted !');
                        const deletedReview = allReviews?.filter((review) => review._id !== id);
                        setAllReviews(deletedReview);
                    }
                });
        }
    };

    return (
        <Card
            style={{
                minHeight: !mobile ? `250px` : `300px`,
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

/* eslint-disable react/no-array-index-key */
import StarHalfIcon from '@mui/icons-material/StarHalf';
// import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarRateIcon from '@mui/icons-material/StarRate';
import React from 'react';

function Rating({ rating }) {
    const numRating = +rating;
    const ratingFloor = Math.floor(numRating);
    const ratingRound = Math.round(numRating);
    const halfStart = ratingRound - ratingFloor;
    const star = 5 - ratingRound;

    return (
        <div
            style={{
                display: `flex`,
                justifyContent: `center`,
                alignItems: `center`,
                color: `#f3680b`,
            }}
        >
            {[...Array(ratingFloor)].map((_, i) => (
                <StarRateIcon key={i} style={{ height: `14px`, width: `14px` }} />
            ))}

            {[...Array(halfStart)].map((_, i) => (
                <StarHalfIcon key={i} style={{ height: `14px`, width: `14px` }} />
            ))}

            {[...Array(star)].map((_, i) => (
                <StarOutlineIcon key={i} style={{ height: `14px`, width: `14px` }} />
            ))}
        </div>
    );
}

export default Rating;

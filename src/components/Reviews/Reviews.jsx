/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-props-no-spreading */
import { Box, Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import useAuth from '../../hooks/useAuth';
import Review from './Review';

function Reviews() {
    const [allReviews, setAllReviews] = useState([]);
    const { mobile } = useAuth();

    useEffect(() => {
        fetch(`https://tourguruapi.babulakter.com/review`)
            .then((res) => res.json())
            .then((data) => setAllReviews(data));
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div
            style={{
                background: `#fff`,
                padding: mobile ? `60px 10px` : `150px 10px`,
            }}
        >
            <Container>
                <Box data-aos="fade-down" data-aos-duration="1500">
                    <Typography color="primary" style={{ textAlign: `center` }}>
                        Testimonial
                    </Typography>
                    <Typography
                        color="bluishDark"
                        variant="h4"
                        style={{
                            textAlign: `center`,
                            fontFamily: `abril`,
                            fontWeight: `700`,
                            color: '#283A5E',
                            letterSpacing: `-1px`,
                        }}
                    >
                        What Our Customers Says
                    </Typography>
                    <Typography style={{ textAlign: `center`, fontFamily: `poppins` }}>
                        Traveling fosters a medium to build human connections with one another by
                        learning about culture, food, new sites, music, and the way people.
                        Traveling fosters a medium to build human connections with one another by
                        learning about culture.
                    </Typography>
                </Box>
                <Box
                    style={{ margin: mobile ? `15px 0px` : `50px 0px` }}
                    data-aos="fade-up"
                    data-aos-duration="1500"
                >
                    <Slider {...settings}>
                        {allReviews?.map((singlereview) => (
                            <Review
                                key={singlereview?._id}
                                userReview={singlereview}
                                allReviews={allReviews}
                                setAllReviews={setAllReviews}
                            />
                        ))}
                    </Slider>
                </Box>
            </Container>
        </div>
    );
}

export default Reviews;

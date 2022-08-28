/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import { Box, Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../hooks/useAuth';

function SinglePackageCard({ singlePackage }) {
    const { mobile, isAdmin } = useAuth();
    const { location, duration, price, img, services, description } = singlePackage;

    return (
        <Card style={{ height: mobile ? `430px` : `450px` }}>
            <Box style={{ cursor: `default` }}>
                <CardMedia component="img" height="auto" image={img} alt="view of the location" />
                <CardContent>
                    <Box
                        style={{
                            display: `flex`,
                            justifyContent: `space-between`,
                            alignItems: `center`,
                            margin: `5px 0px`,
                            color: `#f3680b`,
                        }}
                    >
                        <Typography>{duration}</Typography>
                        <Typography variant="h6" fontWeight="700">
                            {`$${price}`}
                        </Typography>
                    </Box>
                    <Typography gutterBottom variant="h5" component="div" fontFamily="abril">
                        {`${location?.city}, ${location?.country}`}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description.slice(0, 150)}
                    </Typography>
                    <Box style={{ textAlign: `center` }}>
                        {isAdmin === true ? (
                            <Button
                                variant="contained"
                                style={{
                                    margin: `25px 0px 0px 0px`,
                                    width: `150px`,
                                    height: `40px`,
                                    fontWeight: `700`,
                                    fontFamily: `abril`,
                                }}
                                onClick={() => Swal.fire(`Admin doesn't need to buy any package`)}
                            >
                                Buy Package
                            </Button>
                        ) : (
                            <Link
                                to={`/packages/${singlePackage?._id}`}
                                style={{ textDecoration: `none` }}
                            >
                                <Button
                                    variant="contained"
                                    style={{
                                        margin: `25px 0px 0px 0px`,
                                        width: `150px`,
                                        height: `40px`,
                                        fontWeight: `700`,
                                        fontFamily: `abril`,
                                    }}
                                >
                                    Buy Package
                                </Button>
                            </Link>
                        )}
                    </Box>
                </CardContent>
            </Box>
        </Card>
    );
}

export default SinglePackageCard;

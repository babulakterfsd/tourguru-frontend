/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable prettier/prettier */
// import userImage from '../../../assests/images/userdefault.png';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {
    Box, Button, Card,
    CardActions,
    CardContent,
    Container,
    Divider,
    Grid,
    TextField,
    Typography
} from '@mui/material';
import axios from 'axios';
import { useEffect } from 'react';
import Swal from 'sweetalert2';
import defaultAvatar from '../../../assests/images/userdefault.png';
import useAuth from '../../../hooks/useAuth';
import Styles from '../../../styles/Login.module.css';
import ProfileDetails from '../adminDashboard/ProfileDetails';


function Profile(props) {
    const {user, userImageURL, setUserImageURL, userInfoInDatabase, setUserInfoInDatabase} = useAuth()

    const handleUserImageUpload = (e) => {
        const image = e.target.files[0]
        const formData = new FormData()
        formData.set("image", image)
        const imageStorageAPIKey = `99f27926739ee425304cd99a6447e360`
        const imgUploadURL = `https://api.imgbb.com/1/upload?key=${imageStorageAPIKey}`
        axios.post(imgUploadURL, formData)
            .then((res) => {
                setUserImageURL(res?.data?.data?.display_url)
            }).catch((error) => {
                Swal.fire(`Something went wrong when choosing image`)
            })
    }

    useEffect(() => {}, [userInfoInDatabase]);

    const saveUserProfilePhoto = (email, photoURL) => {
        const myUser = { email, img: photoURL};
        fetch("http://localhost:5000/users", {
          method: 'PUT',
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(myUser),
        }).then(res=> res.json())
           .then((data) => {
            if(data?.modifiedCount > 0 ) {
                setUserImageURL('')
                window.location.reload()
       }
           }).catch(err => console.log(err.message))
      };


    return (
        <Container>
            <Grid container spacing={{xs: 2, md: 5}}>
            <Grid item xs={12} md={4}>
            <Card {...props} style={{position: 'relative'}}>
            <CardContent>
                <Box
                    sx={{
                        alignItems: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <img
                            src={userInfoInDatabase?.img ? userInfoInDatabase?.img : defaultAvatar}
                            style={{height: `60px`, width: `60px`, borderRadius: `500px`}}
                            alt="user"
                        />
                    <Typography color="textPrimary" variant="h5">
                        {userInfoInDatabase?.displayName}
                    </Typography>
                    {
                        userInfoInDatabase?.city && userInfoInDatabase?.country ? (<Typography color="#1A385A" variant="p" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '13px'}}>
                        <LocationOnIcon style={{fontSize: '13px'}}/>
                       {`${userInfoInDatabase?.city}, ${userInfoInDatabase?.country}`}
                   </Typography>) : null
                    }
                    {
                        userInfoInDatabase?.phone ? (<Typography color="#1A385A" variant="p" style={{fontSize: '13px'}}>
                        {userInfoInDatabase?.phone}
                    </Typography>) : null
                    }
                    <Box style={{position: 'absolute', top: '0px', left: '0px', textAlign: 'center', padding: '15px', background: '#f3680b', transform: 'rotate(-45deg) translateY(-15px) translateX(-5px)'}}>
                    <Typography color="#fff" variant="body2" style={{marginTop: `8px`}}>
                        {userInfoInDatabase?.role === 'admin' ? `Admin` : `User`}
                    </Typography>
                    </Box>
                </Box>
            </CardContent>
            <Divider />
            <CardActions style={{display: `flex`, justifyContent: `center`, flexDirection: `column`, alignItems: `center`}}>
                <TextField
                            type="file"
                            margin="normal"
                            required
                            fullWidth
                            id="userPhoto"
                            name="photourl"
                            className={Styles.customTextField}
                            style={{border: `0px solid transparent`}}
                            onChange={(e) => handleUserImageUpload(e)}
                        />
                        {
                            userImageURL !== '' ? (<Button color="primary" variant='contained' fullWidth  style={{textTransform: `none`}} onClick={() => saveUserProfilePhoto(user?.email, userImageURL)}>
                            Change Photo
                        </Button>) : (<Button color="primary" variant='contained' disabled fullWidth  style={{textTransform: `none`}} onClick={() => saveUserProfilePhoto(user?.email, userImageURL)}>
                            Change Photo
                        </Button>)
                        }
            </CardActions>
        </Card>
            </Grid>
            <Grid item xs={12} md={8}>
                <ProfileDetails/>
            </Grid>
        </Grid>
        </Container>
    );
}

export default Profile;

/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable prettier/prettier */
// import userImage from '../../../assests/images/userdefault.png';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Container,
    Divider,
    Grid,
    TextField,
    Typography
} from '@mui/material';
import axios from 'axios';
import { deleteUser } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import defaultAvatar from '../../../assests/images/userdefault.png';
import useAuth from '../../../hooks/useAuth';
import Styles from '../../../styles/Login.module.css';
import Classes from '../../../styles/Profile.module.css';
import ProfileDetails from '../adminDashboard/ProfileDetails';

function Profile(props) {
    const [selectedImage, setSelectedImage] = useState(null);
  const {
    user,
    userImageURL,
    setUserImageURL,
    userInfoInDatabase,
    setUserInfoInDatabase,
    setUser,
    setIsLoading,
    auth,
  } = useAuth();

  const navigate = useNavigate();

  const handleUserImageUpload = (e) => {
    const image = e.target.files[0];
    if(image) {
        setSelectedImage('')
    }
    const formData = new FormData();
    formData.set('image', image);
    const imageStorageAPIKey = `99f27926739ee425304cd99a6447e360`;
    const imgUploadURL = `https://api.imgbb.com/1/upload?key=${imageStorageAPIKey}`;
    axios
      .post(imgUploadURL, formData)
      .then((res) => {
        setUserImageURL(res?.data?.data?.display_url);
        setSelectedImage(res?.data?.data?.display_url);
      })
      .catch((error) => {
        Swal.fire(`Something went wrong when choosing image`);
      });
  };

  useEffect(() => {}, [userInfoInDatabase, userImageURL]);

  const saveUserProfilePhoto = (email, photoURL) => {
    const myUser = { email, img: photoURL };
    fetch('https://rocky-inlet-29740.herokuapp.com/users', {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(myUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.modifiedCount > 0) {
          setUserImageURL('');
          axios
            .get(`https://rocky-inlet-29740.herokuapp.com/user/${user?.email}`)
            .then((result) => {
              setUserInfoInDatabase(result?.data);
            });
          Swal.fire(`Profile photo updated successfully`);
          setSelectedImage(null);
        }
      });
    //    .catch(err => console.log(err.message))
  };

  const handleDeleteAccount = () => {
    if (user?.email === 'babulakterfsd@gmail.com') {
      Swal.fire('You can not delete Head Admin account');
    } else {
      deleteUser(user)
        .then(() => {
          const url = `https://rocky-inlet-29740.herokuapp.com/deleteuser/${user?.email}`;
          fetch(url, {
            method: 'DELETE',
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount > 0) {
                Swal.fire(`Account deleted successfully`);
              }
            });
        })
        .catch((error) => {
          Swal.fire(`Something went wrong when deleting account`);
        });
    }
  };

  return (
    <Container className={`${Classes.profile}`}>
      <Grid container spacing={{ xs: 2, md: 5 }}>
        <Grid
          item
          xs={12}
          md={4}
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <Card {...props} style={{ position: 'relative' }}>
            <CardContent>
              <Box
                sx={{
                  alignItems: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  marginTop: '30px',
                }}
              >
                <img
                  src={
                    userInfoInDatabase?.img
                      ? userInfoInDatabase?.img
                      : defaultAvatar
                  }
                  style={{
                    height: `60px`,
                    width: `60px`,
                    borderRadius: `500px`,
                    objectFit: 'cover',
                  }}
                  alt="user"
                />
                <Typography color="textPrimary" variant="h5">
                  {userInfoInDatabase?.displayName}
                </Typography>
                {userInfoInDatabase?.city && userInfoInDatabase?.country ? (
                  <Typography
                    color="#1A385A"
                    variant="p"
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      fontSize: '13px',
                    }}
                  >
                    <LocationOnIcon style={{ fontSize: '13px' }} />
                    {`${userInfoInDatabase?.city}, ${userInfoInDatabase?.country}`}
                  </Typography>
                ) : null}
                {userInfoInDatabase?.phone ? (
                  <Typography
                    color="#1A385A"
                    variant="p"
                    style={{ fontSize: '13px' }}
                  >
                    {userInfoInDatabase?.phone}
                  </Typography>
                ) : null}
                <Button
                  type="button"
                  variant="text"
                  style={{
                    textTransform: 'capitalize',
                    position: 'absolute',
                    top: '0px',
                    right: '0px',
                  }}
                  onClick={() => handleDeleteAccount()}
                >
                  Delete Account
                </Button>
                <Box
                  style={{
                    position: 'absolute',
                    top: '0px',
                    left: '0px',
                    textAlign: 'center',
                    padding: '15px',
                    background: '#f3680b',
                    transform:
                      'rotate(-45deg) translateY(-15px) translateX(-5px)',
                  }}
                >
                  <Typography
                    color="#fff"
                    variant="body2"
                    style={{ marginTop: `8px` }}
                  >
                    {userInfoInDatabase?.role === 'admin' ? `Admin` : `User`}
                  </Typography>
                </Box>
              </Box>
            </CardContent>
            <Divider />
            <CardActions
              style={{
                display: `flex`,
                justifyContent: `center`,
                flexDirection: `column`,
                alignItems: `center`,
              }}
            >
              <TextField
                type="file"
                margin="normal"
                required
                fullWidth
                id="userPhoto"
                name="photourl"
                className={Styles.customTextField}
                style={{ border: `0px solid transparent` }}
                onChange={(e) => handleUserImageUpload(e)}
              />
              {selectedImage === null ? (
                <Button
                  color="primary"
                  variant="contained"
                  fullWidth
                  disabled
                  style={{ textTransform: `none` }}
                >
                  Choose Photo
                </Button>
              ) : ( selectedImage === '' ? (<Button
                color="primary"
                variant="contained"
                disabled
                fullWidth
                style={{ textTransform: `none` }}
              >
                Processing Photo
              </Button>) : (<Button
                  color="primary"
                  variant="contained"
                  fullWidth
                  style={{ textTransform: `none` }}
                  onClick={() =>
                    saveUserProfilePhoto(user?.email, userImageURL)
                  }
                >
                  Upload Photo
                </Button>)
              )}
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={8} data-aos="fade-left" data-aos-duration="1500">
          <ProfileDetails />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Profile;

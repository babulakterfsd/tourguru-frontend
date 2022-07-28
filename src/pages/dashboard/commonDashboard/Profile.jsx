/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable prettier/prettier */
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Container,
    Divider,
    Grid,
    Typography
} from '@mui/material';
import userImage from '../../../assests/images/userdefault.png';
import useAuth from '../../../hooks/useAuth';
import ProfileDetails from '../adminDashboard/ProfileDetails';


function Profile(props) {
    const {user} = useAuth()
    return (
        <Container>
            <Grid container spacing={{xs: 2, md: 5}}>
            <Grid item xs={12} md={4}>
            <Card {...props}>
            <CardContent>
                <Box
                    sx={{
                        alignItems: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <img
                        src={userImage}
                        style={{height: `60px`, width: `60px`, borderRadius: `500px`}}
                        alt="user"
                    />
                    <Typography color="textPrimary" gutterBottom variant="h5">
                        {user?.displayName}
                    </Typography>
                    <Typography color="textSecondary" variant="body2" style={{marginTop: `8px`}}>
                        {user?.email}
                    </Typography>
                </Box>
            </CardContent>
            <Divider />
            <CardActions>
                <Button color="primary" fullWidth variant="text" style={{textTransform: `none`}}>
                    Change Photo
                </Button>
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

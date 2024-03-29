/* eslint-disable react/jsx-props-no-spreading */
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import MoneyIcon from '@mui/icons-material/Money';
import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';

function PendingOrders(props) {
    return (
        <Card sx={{ height: '100%' }} {...props} data-aos="zoom-in" data-aos-duration="1500">
            <CardContent>
                <Grid container spacing={3} sx={{ justifyContent: 'space-between' }}>
                    <Grid item>
                        <Typography color="textSecondary" gutterBottom variant="overline">
                            Total Orders
                        </Typography>
                        <Typography color="textPrimary" variant="h4">
                            168
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Avatar
                            sx={{
                                backgroundColor: 'error.main',
                                height: 56,
                                width: 56,
                            }}
                        >
                            <MoneyIcon />
                        </Avatar>
                    </Grid>
                </Grid>
                <Box
                    sx={{
                        pt: 2,
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <ArrowDownwardIcon color="error" />
                    <Typography
                        color="error"
                        sx={{
                            mr: 1,
                        }}
                        variant="body2"
                    >
                        12%
                    </Typography>
                    <Typography color="textSecondary" variant="caption">
                        Since last month
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}

export default PendingOrders;

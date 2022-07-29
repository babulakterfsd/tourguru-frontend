/* eslint-disable react/jsx-props-no-spreading */
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';

export default function TotalProfit(props) {
    return (
        <Card {...props}>
            <CardContent>
                <Grid container spacing={3} sx={{ justifyContent: 'space-between' }}>
                    <Grid item>
                        <Typography color="textSecondary" gutterBottom variant="overline">
                            TOTAL PROFIT
                        </Typography>
                        <Typography color="textPrimary" variant="h4">
                            $126k
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Avatar
                            sx={{
                                backgroundColor: `#f3680b`,
                                height: 56,
                                width: 56,
                            }}
                        >
                            <AttachMoneyIcon />
                        </Avatar>
                    </Grid>
                </Grid>
                <Box
                    sx={{
                        alignItems: 'center',
                        display: 'flex',
                        pt: 2,
                    }}
                >
                    <ArrowUpwardIcon color="success" />
                    <Typography
                        variant="body2"
                        sx={{
                            mr: 1,
                        }}
                    >
                        36%
                    </Typography>
                    <Typography color="textSecondary" variant="caption">
                        Since last month
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}

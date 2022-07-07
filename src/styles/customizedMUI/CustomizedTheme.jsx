import { createTheme } from '@mui/material/styles';

const colors = {
    primary: '#3b5',
    secondary: '#e38421',
    beguni: '#4f41b2',
};

const CustomizedTheme = createTheme({
    palette: {
        primary: {
            main: colors.primary,
        },
        secondary: {
            main: colors.secondary,
        },
        beguni: {
            main: colors.beguni,
        },
    },
    neutral: {
        main: '#e63e31',
        contrastText: '#fff',
    },
});

export default CustomizedTheme;

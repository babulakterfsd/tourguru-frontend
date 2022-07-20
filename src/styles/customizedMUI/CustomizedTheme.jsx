import { createTheme } from '@mui/material/styles';

const colors = {
    atomicSteelBlue: '#1A385A',
    seaGUllBlue: '#769ABE',
    tomatoOrange: '#E46F44',
    pinkShell: '#E8AA9B',
    plumViolet: '#DCD5DC',
    bluishDark: '#1a213d',
    white: '#fff',
    dark: '#000',
    primary: '#f3680b',
};

const CustomizedTheme = createTheme({
    typography: {
        abril: ['Abril Fatface', 'cursive'].join(','),
        poppins: ['Poppins', 'sans-serif'].join(','),
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 475,
            md: 768,
            lg: 1200,
            xl: 1399,
        },
    },
    palette: {
        atomicSteelBlue: {
            main: colors.atomicSteelBlue,
        },
        seaGUllBlue: {
            main: colors.seaGUllBlue,
        },
        tomatoOrange: {
            main: colors.tomatoOrange,
        },
        pinkShell: {
            main: colors.pinkShell,
        },
        plumViolet: {
            main: colors.plumViolet,
        },
        bluishDark: {
            main: colors.bluishDark,
        },
        white: {
            main: colors.white,
        },
        dark: {
            main: colors.dark,
        },
        primary: {
            main: colors.primary,
        },
    },
    neutral: {
        main: '#e63e31',
        contrastText: '#fff',
    },
});

export default CustomizedTheme;

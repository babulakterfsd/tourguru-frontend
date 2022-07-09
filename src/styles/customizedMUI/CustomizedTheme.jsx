import { createTheme } from '@mui/material/styles';

const colors = {
    atomicSteelBlue: '#1A385A',
    seaGUllBlue: '#769ABE',
    tomatoOrange: '#E46F44',
    pinkShell: '#E8AA9B',
    plumViolet: '#DCD5DC',
    primary: '#3b5',
    bluishDark: '#283a5e',
    white: '#fff',
    dark: '#000',
};

const CustomizedTheme = createTheme({
    typography: {
        abril: ['Abril Fatface', 'cursive'].join(','),
        poppins: ['Poppins', 'sans-serif'].join(','),
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
        primary: {
            main: colors.primary,
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
    },
    neutral: {
        main: '#e63e31',
        contrastText: '#fff',
    },
});

export default CustomizedTheme;

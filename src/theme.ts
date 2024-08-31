import { createTheme } from '@mui/material/styles';

// https://coolors.co/2e382e-50c9ce-72a1e5-9883e5-fcd3de

export const mainTheme = createTheme({
    palette: {
        primary: {
            main: '#9883E5',
            contrastText: '#fff',
            // light: '#757ce8',
            // dark: '#002884',
        },
        secondary: {
            main: '#72A1E5',
            contrastText: '#fff',
            // light: '#ff7961',
            // dark: '#ba000d',
        },
    },
})
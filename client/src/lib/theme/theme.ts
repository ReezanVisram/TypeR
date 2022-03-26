import { createTheme } from '@mui/material/styles';

export const generateTheme = () => {
    const theme = createTheme({
        palette: {
            primary: {
                main: '#116466',
                contrastText: '#D1E8E2',
            },
            secondary: {
                main: '#FFCB9A',
                contrastText: '#2C3531',
            },
        },
    });

    return theme;
};

import { ThemeProvider } from '@mui/system';
import React from 'react';
import { generateTheme } from './lib/theme/theme';

const AppProvider: React.FC<{}> = ({ children }) => {
    return <ThemeProvider theme={generateTheme()}>{children}</ThemeProvider>;
};

export default AppProvider;

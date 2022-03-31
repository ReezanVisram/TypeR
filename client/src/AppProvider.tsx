import React from 'react';
import { ThemeProvider } from '@mui/system';
import { generateTheme } from './lib/theme/theme';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const AppProvider: React.FC<{}> = ({ children }) => {
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={generateTheme()}>{children}</ThemeProvider>
        </QueryClientProvider>
    );
};

export default AppProvider;

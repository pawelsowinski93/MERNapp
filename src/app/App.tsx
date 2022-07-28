import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import Layout from './Layout';
import Router from './Router';
import { theme } from './theme/theme';

const App: React.FC = (): JSX.Element => (
    <BrowserRouter>
        <ThemeProvider theme={theme}>
            <Layout>
                <Router />
            </Layout>
        </ThemeProvider>
    </BrowserRouter>
);

export default App;

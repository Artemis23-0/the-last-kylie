import React from 'react';
import PageRoutes from './utilities/routing/Routes';
import { ThemeProvider } from '@emotion/react';
import { theme } from './config/theming/Theme';
import { CssBaseline } from '@mui/material';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <PageRoutes />
    </ThemeProvider>
  );
}

export default App;

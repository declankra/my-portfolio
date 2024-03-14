import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot for React v18
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import WebFont from 'webfontloader';
import { ThemeProvider } from '@mui/material/styles'; // Import ThemeProvider
import theme from './styles/muiTheme'; // Import your custom theme

WebFont.load({
  google: {
   families: [
      'Inconsolata:200,400', 
      'Roboto:100,400',
      'Poppins:400,600,700',
      'Titillium Web:200,400,600,700',
      'Space Grotesk:300,4000,600,700',
      'sans-serif'
    ] // applied globally in index.css file

  }
});

const root = createRoot(document.getElementById('root')); // Use createRoot
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}> {/* Wrap App with ThemeProvider */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);